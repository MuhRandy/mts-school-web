import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";
import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "./firebase";
import {
  ChangeIsLoading,
  ChangeNews,
  CreatePostState,
  DataCollectionRef,
  IncrementRenderCount,
  PostType,
} from "./type";
import { Dispatch, SetStateAction } from "react";
import {
  StorageReference,
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { NavigateFunction } from "react-router-dom";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// get the data
const getData = async (
  dataCollectionRef: DataCollectionRef,
  isLoadingHandler: ChangeIsLoading,
  getDataHandler: any
) => {
  isLoadingHandler(true);

  const data = await getDocs(dataCollectionRef);

  getDataHandler(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

  isLoadingHandler(false);
};

// get news data from firestore
// --------
const getNews = async (
  isLoadingHandler: ChangeIsLoading,
  newsHandler: ChangeNews
) => {
  // database ref
  const newsCollectionRef = collection(db, "news");

  // database query, order by timestamp and desc it
  const q = query(newsCollectionRef, orderBy("timestamp", "desc"));

  getData(q, isLoadingHandler, newsHandler);
};

// --------

// get post from firestore based on postID set state according to setState
const getSingleData = async (
  setState: Dispatch<SetStateAction<DocumentData | undefined>>,
  docPath: "news" | "teacherData",
  postID: string,
  isLoadingHandler: ChangeIsLoading
) => {
  isLoadingHandler(true);
  const docRef = doc(db, docPath, postID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setState(docSnap.data());
    isLoadingHandler(false);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    isLoadingHandler(false);
  }
};

// get post date from database and turn it to desired format
const toReadableDate = (dateData: any) => {
  const date = dateData.toDate();
  const days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const day = days[date?.getDay()];
  const month = months[date?.getMonth()];
  return `${day}, ${date?.getDate()} ${month} ${date?.getFullYear()}`;
};

const getTeacherData = async (
  isLoadingHandler: ChangeIsLoading,
  dataTeacherHandler: Dispatch<SetStateAction<any[]>>
) => {
  // database ref
  const teacherDataCollectionRef = collection(db, "teacherData");

  getData(teacherDataCollectionRef, isLoadingHandler, dataTeacherHandler);
};

// delete doc or data on firebase database based on doc id
const deleteData = async (
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  imgRef: StorageReference,
  dataDoc: DocumentReference<DocumentData, DocumentData>
) => {
  isLoadingHandler(true);

  // delete image on storage
  deleteObject(imgRef).catch((err) => console.log(err));

  // delete post on firestore
  await deleteDoc(dataDoc);
  incrementRenderCountHandler();
  isLoadingHandler(false);
};

const deleteTeacherData = (
  id: string,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  imgPath: string
) => {
  const imgRef = ref(storage, imgPath);
  const teacherData = doc(db, "teacherData", id);

  deleteData(
    isLoadingHandler,
    incrementRenderCountHandler,
    imgRef,
    teacherData
  );
};

// delete doc or article on firebase database based on doc id
const deletePost = async (
  id: string,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  imgPath: string,
  navigateHandler: NavigateFunction
) => {
  const imgRef = ref(storage, imgPath);
  const postDoc = doc(db, "news", id);

  deleteData(isLoadingHandler, incrementRenderCountHandler, imgRef, postDoc);
  navigateHandler("/");
};

// add doc on firebase database on posts collection then navigate to home
const createPost = async (
  createPostState: Omit<CreatePostState, "file">,
  imgURL: string,
  imgPath: string,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  const postModel: PostType = {
    ...createPostState,
    imgUrl: imgURL,
    imgPath: imgPath,
    timestamp: serverTimestamp(),
    author: {
      id: auth.currentUser?.uid,
    },
  };

  const postCollectionRef = collection(db, "news");
  await addDoc(postCollectionRef, postModel).catch((err) => console.log(err));
  incrementRenderCountHandler();
  navigateHandler("/");
};

// upload image in storage and then save downloadUrl to referred doc on firestore
const uploadFile = (
  createPostState: CreatePostState,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  const { file } = createPostState;

  if (file === null) {
    alert("Please select an image");
    return;
  }

  isLoadingHandler(true);

  const imgPath = `post-image/${uuidv4()}`;
  const imageRef = ref(storage, imgPath);

  uploadBytes(imageRef, file)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          createPost(
            createPostState,
            url,
            imgPath,
            incrementRenderCountHandler,
            navigateHandler
          );
        })
        .catch((error) => {
          console.log(error.message);
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// replace whatever change to the referred post id
const updateCreatePost = async (
  postID: string,
  createPostState: Omit<CreatePostState, "file">,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction,
  imgURL: string,
  imgPath: string
) => {
  const postCollectionRef = doc(db, "news", postID);
  await setDoc(postCollectionRef, {
    ...createPostState,
    imgUrl: imgURL,
    imgPath: imgPath,
    timestamp: serverTimestamp(),
    author: {
      id: auth.currentUser?.uid,
    },
  }).catch((err) => console.log(err));

  incrementRenderCountHandler();
  navigateHandler("/");
};

// Update post
const updatePost = (
  postID: string,
  createPostState: CreatePostState,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  const { file, imgUrl, imgPath } = createPostState;

  if (file === null && imgUrl == "") {
    alert("Please select an image");
    return;
  }

  isLoadingHandler(true);

  // if file exist replace old file with new file
  if (file !== null) {
    const imageRef = ref(storage, imgPath);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            updateCreatePost(
              postID,
              createPostState,
              incrementRenderCountHandler,
              navigateHandler,
              url,
              imgPath
            );
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    updateCreatePost(
      postID,
      createPostState,
      incrementRenderCountHandler,
      navigateHandler,
      imgUrl,
      imgPath
    );
  }

  console.log("akhir");
};

// add doc on firebase database on teacher data collection then navigate to profil
const addTeacherData = async (
  name: string,
  position: string,
  imgUrl: string,
  imgPath: string,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  const teacherDataCollectionRef = collection(db, "teacherData");
  await addDoc(teacherDataCollectionRef, {
    name,
    position,
    imgUrl,
    imgPath,
    timestamp: serverTimestamp(),
    author: {
      id: auth.currentUser?.uid,
    },
  }).catch((err) => console.log(err));
  incrementRenderCountHandler();
  navigateHandler("/profil");
};

// upload image in storage and then save downloadUrl to referred doc on firestore
const uploadData = (
  name: string,
  position: string,
  file: File | null,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  if (file === null) {
    alert("Please select an image");
    return;
  }

  isLoadingHandler(true);

  const imgPath = `teacher-data-image/${uuidv4()}`;
  const imageRef = ref(storage, imgPath);

  uploadBytes(imageRef, file)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          addTeacherData(
            name,
            position,
            url,
            imgPath,
            incrementRenderCountHandler,
            navigateHandler
          );
        })
        .catch((error) => {
          console.log(error.message);
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// replace whatever change to the referred data id
const updateData = async (
  dataID: string,
  name: string,
  position: string,
  imgURL: string,
  imgPath: string,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  const dataRef = doc(db, "teacherData", dataID);
  await setDoc(dataRef, {
    name,
    position,
    imgUrl: imgURL,
    imgPath,
    timestamp: serverTimestamp(),
    author: {
      id: auth.currentUser?.uid,
    },
  }).catch((err) => console.log(err));

  incrementRenderCountHandler();
  navigateHandler("/profil");
};

// Update data
const updateTeacherData = (
  dataID: string,
  name: string,
  position: string,
  imgUrl: string,
  imgPath: string,
  file: File | null,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  if (file === null && imgUrl == "") {
    alert("Please select an image");
    return;
  }

  isLoadingHandler(true);

  // if file exist replace old file with new file
  if (file !== null) {
    const imageRef = ref(storage, imgPath);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            updateData(
              dataID,
              name,
              position,
              url,
              imgPath,
              incrementRenderCountHandler,
              navigateHandler
            );
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    updateData(
      dataID,
      name,
      position,
      imgUrl,
      imgPath,
      incrementRenderCountHandler,
      navigateHandler
    );
  }
};

export {
  cn,
  getNews,
  getSingleData,
  getTeacherData,
  toReadableDate,
  deleteTeacherData,
  deletePost,
  uploadFile,
  updatePost,
  uploadData,
  updateTeacherData,
};
