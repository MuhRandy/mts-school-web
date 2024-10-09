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
  const imgRef = ref(storage, imgPath);
  const teacherData = doc(db, "teacherData", id);

  deleteData(
    isLoadingHandler,
    incrementRenderCountHandler,
    imgRef,
    teacherData
  );
};

export const deletePost = async (
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
