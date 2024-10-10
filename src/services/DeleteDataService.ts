import { deleteObject, ref, StorageReference } from "firebase/storage";
import { ChangeIsLoading, IncrementRenderCount } from "../utils/type";
import {
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { NavigateFunction } from "react-router-dom";

export const deleteTeacherData = (
  id: string,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  imgPath: string
) => {
  try {
    const imgRef = ref(storage, imgPath);
    const teacherData = doc(db, "teacherData", id);

    deleteData(
      isLoadingHandler,
      incrementRenderCountHandler,
      imgRef,
      teacherData
    );
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (
  id: string,
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  imgPath: string,
  navigateHandler: NavigateFunction
) => {
  try {
    const imgRef = ref(storage, imgPath);
    const postDoc = doc(db, "news", id);

    await deleteData(
      isLoadingHandler,
      incrementRenderCountHandler,
      imgRef,
      postDoc
    );

    navigateHandler("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (
  isLoadingHandler: ChangeIsLoading,
  incrementRenderCountHandler: IncrementRenderCount,
  imgRef: StorageReference,
  dataDoc: DocumentReference<DocumentData, DocumentData>
) => {
  try {
    isLoadingHandler(true);

    // delete image on storage
    deleteObject(imgRef);

    // delete post on firestore
    await deleteDoc(dataDoc);

    incrementRenderCountHandler();
    isLoadingHandler(false);
  } catch (error) {
    console.log(error);
  }
};
