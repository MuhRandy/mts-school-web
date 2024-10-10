import { NavigateFunction } from "react-router-dom";
import {
  ChangeIsLoading,
  CreatePostState,
  IncrementRenderCount,
} from "../utils/type";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import TeacherData from "../models/TeacherData";
import Post from "../models/Post";

export const createPost = async (
  createPostState: Omit<CreatePostState, "file">,
  imgURL: string,
  imgPath: string,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  try {
    const data = {
      ...createPostState,
      imgUrl: imgURL,
      imgPath: imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    };

    const postCollectionRef = collection(db, "news");

    await addDoc(postCollectionRef, Post(data));

    incrementRenderCountHandler();
    navigateHandler("/");
  } catch (error) {
    console.log(error);
  }
};

// upload image in storage and then save downloadUrl to referred doc on firestore
export const uploadFile = async (
  createPostState: CreatePostState,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  try {
    const { file } = createPostState;

    if (file === null) {
      alert("Please select an image");
      return;
    }

    isLoadingHandler(true);

    const imgPath = `post-image/${uuidv4()}`;
    const imageRef = ref(storage, imgPath);

    const snapshot = await uploadBytes(imageRef, file);
    const snapshotUrl = await getDownloadURL(snapshot.ref);

    createPost(
      createPostState,
      snapshotUrl,
      imgPath,
      incrementRenderCountHandler,
      navigateHandler
    );
  } catch (error) {
    console.log(error);
  }
};

export const addTeacherData = async (
  name: string,
  position: string,
  imgUrl: string,
  imgPath: string,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  try {
    const teacherDataCollectionRef = collection(db, "teacherData");
    const data = {
      name,
      position,
      imgUrl,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    };

    await addDoc(teacherDataCollectionRef, TeacherData(data));

    incrementRenderCountHandler();
    navigateHandler("/profil");
  } catch (error) {
    console.log(error);
  }
};

export const uploadData = async (
  name: string,
  position: string,
  file: File | null,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  navigateHandler: NavigateFunction
) => {
  try {
    if (file === null) {
      alert("Please select an image");
      return;
    }

    isLoadingHandler(true);

    const imgPath = `teacher-data-image/${uuidv4()}`;
    const imageRef = ref(storage, imgPath);

    const snapshot = await uploadBytes(imageRef, file);
    const snapshotUrl = await getDownloadURL(snapshot.ref);

    addTeacherData(
      name,
      position,
      snapshotUrl,
      imgPath,
      incrementRenderCountHandler,
      navigateHandler
    );
  } catch (error) {
    console.log(error);
  }
};
