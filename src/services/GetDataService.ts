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

export const getNews = (
  isLoadingHandler: ChangeIsLoading,
  newsHandler: ChangeNews
) => {
  try {
    const newsCollectionRef = collection(db, "news");
    const queryByTimeStampDescend = query(
      newsCollectionRef,
      orderBy("timestamp", "desc")
    );

    getData(queryByTimeStampDescend, isLoadingHandler, newsHandler);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleData = async (
  setState: Dispatch<SetStateAction<DocumentData | undefined>>,
  docPath: "news" | "teacherData",
  postID: string,
  isLoadingHandler: ChangeIsLoading
) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const getTeacherData = (
  isLoadingHandler: ChangeIsLoading,
  dataTeacherHandler: Dispatch<SetStateAction<any[]>>
) => {
  try {
    const teacherDataCollectionRef = collection(db, "teacherData");

    getData(teacherDataCollectionRef, isLoadingHandler, dataTeacherHandler);
  } catch (error) {
    console.log(error);
  }
};

const getData = async (
  dataCollectionRef: DataCollectionRef,
  isLoadingHandler: ChangeIsLoading,
  getDataHandler: any
) => {
  try {
    isLoadingHandler(true);

    const docSnap = await getDocs(dataCollectionRef);
    const data = docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    getDataHandler(data);

    isLoadingHandler(false);
  } catch (error) {
    console.log(error);
  }
};
