import { NavigateFunction } from "react-router-dom";
import {
  ChangeIsLoading,
  CreatePostState,
  IncrementRenderCount,
} from "../utils/type";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const updateCreatePost = async (
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

export const updatePost = (
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

export const updateTeacherData = (
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
