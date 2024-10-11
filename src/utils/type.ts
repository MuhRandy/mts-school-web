import { CollectionReference, DocumentData, Query } from "firebase/firestore";
import { ReactNode } from "react";
import { PostData } from "../models/Post";

export type ChangeNews = (news: unknown[]) => void;

export type ChangeIsLoading = (isLoading: boolean) => void;

export type IncrementRenderCount = () => void;

export type DataCollectionRef =
  | CollectionReference<DocumentData, DocumentData>
  | Query<DocumentData, DocumentData>;

export type CreatePostState = Omit<PostData, "timestamp" | "author"> & {
  file: File | null;
};

export type Children = { children: ReactNode };
