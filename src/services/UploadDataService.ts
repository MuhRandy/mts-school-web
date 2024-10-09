import { NavigateFunction } from "react-router-dom";
import {
  ChangeIsLoading,
  CreatePostState,
  IncrementRenderCount,
  PostType,
} from "../utils/type";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const createPost = async (
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
export const uploadFile = (
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

export const addTeacherData = async (
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

export const uploadData = (
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
