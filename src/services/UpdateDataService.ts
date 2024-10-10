import { NavigateFunction } from "react-router-dom";
import {
  ChangeIsLoading,
  CreatePostState,
  IncrementRenderCount,
} from "../utils/type";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Post from "../models/Post";

export const updateCreatePost = async (
  postID: string,
  createPostState: Omit<CreatePostState, "file">,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction,
  imgURL: string,
  imgPath: string
) => {
  try {
    const postCollectionRef = doc(db, "news", postID);
    const data = {
      ...createPostState,
      imgUrl: imgURL,
      imgPath: imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    };

    await setDoc(postCollectionRef, Post(data));

    incrementRenderCountHandler();
    navigateHandler("/");
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (
  postID: string,
  createPostState: CreatePostState,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  try {
    const { file, imgUrl, imgPath } = createPostState;

    if (file === null && imgUrl == "") {
      alert("Please select an image");
      return;
    }

    isLoadingHandler(true);

    // if file exist replace old file with new file
    if (file !== null) {
      const imageRef = ref(storage, imgPath);

      const snapshot = await uploadBytes(imageRef, file);
      const snapshotUrl = await getDownloadURL(snapshot.ref);

      updateCreatePost(
        postID,
        createPostState,
        incrementRenderCountHandler,
        navigateHandler,
        snapshotUrl,
        imgPath
      );
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
  } catch (error) {
    console.log(error);
  }
};

export const updateTeacherData = async (
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
  try {
    if (file === null && imgUrl == "") {
      alert("Please select an image");
      return;
    }

    isLoadingHandler(true);

    // if file exist replace old file with new file
    if (file !== null) {
      const imageRef = ref(storage, imgPath);

      const snapshot = await uploadBytes(imageRef, file);
      const snapshotUrl = await getDownloadURL(snapshot.ref);

      updateData(
        dataID,
        name,
        position,
        snapshotUrl,
        imgPath,
        incrementRenderCountHandler,
        navigateHandler
      );
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
  } catch (error) {
    console.log(error);
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
  try {
    const dataRef = doc(db, "teacherData", dataID);
    const data = {
      name,
      position,
      imgUrl: imgURL,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    };

    await setDoc(dataRef, data).catch((err) => console.log(err));

    incrementRenderCountHandler();
    navigateHandler("/profil");
  } catch (error) {
    console.log(error);
  }
};
