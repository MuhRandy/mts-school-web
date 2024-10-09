import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { ChangeIsLoading, ChangeNews, DataCollectionRef } from "../utils/type";
import { db } from "../utils/firebase";
import { Dispatch, SetStateAction } from "react";

export const getNews = async (
  isLoadingHandler: ChangeIsLoading,
  newsHandler: ChangeNews
) => {
  const newsCollectionRef = collection(db, "news");
  const queryByTimeStampDescend = query(
    newsCollectionRef,
    orderBy("timestamp", "desc")
  );

  getData(queryByTimeStampDescend, isLoadingHandler, newsHandler);
};

export const getSingleData = async (
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
    alert("No such document!");
    isLoadingHandler(false);
  }
};

export const getTeacherData = async (
  isLoadingHandler: ChangeIsLoading,
  dataTeacherHandler: Dispatch<SetStateAction<any[]>>
) => {
  const teacherDataCollectionRef = collection(db, "teacherData");

  getData(teacherDataCollectionRef, isLoadingHandler, dataTeacherHandler);
};

const getData = async (
  dataCollectionRef: DataCollectionRef,
  isLoadingHandler: ChangeIsLoading,
  getDataHandler: any
) => {
  isLoadingHandler(true);

  const docSnap = await getDocs(dataCollectionRef);
  const data = docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  getDataHandler(data);

  isLoadingHandler(false);
};
