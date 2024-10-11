import {
  CollectionReference,
  DocumentData,
  FieldValue,
  Query,
} from "firebase/firestore";
import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

type ActionType =
  | "changed_news"
  | "changed_is_loading"
  | "changed_is_auth"
  | "changed_want_to_login"
  | "incremented_render_count"
  | "";

type NewsType = unknown[];

type GlobalState = {
  isAuth: boolean;
  isLoading: boolean;
  renderCount: number;
  wantToLogin: boolean;
  news: NewsType;
};

type GlobalAction = {
  type: ActionType;
  newNews: NewsType;
  newIsLoading: boolean;
  newIsAuth: boolean;
  newWantToLogin: boolean;
};

type ChangeNews = (news: NewsType) => void;

type ChangeIsLoading = (isLoading: boolean) => void;

type IncrementRenderCount = () => void;

type GlobalStateAction =
  | {
      changeNews: ChangeNews;
      changeIsLoading: ChangeIsLoading;
      changeIsAuth: (isAuth: boolean) => void;
      changeWantToLogin: (wantToLogin: boolean) => void;
      incrementRenderCount: IncrementRenderCount;
      navigate: NavigateFunction;
    }
  | Record<string, never>;

type GlobalContext = {
  state: GlobalState;
  globalStateAction: GlobalStateAction;
};

type DataCollectionRef =
  | CollectionReference<DocumentData, DocumentData>
  | Query<DocumentData, DocumentData>;

type PostType = {
  title: string;
  post: string;
  postCategory: string;
  imgUrl: string;
  imgPath: string;
  timestamp: FieldValue;
  author: {
    id: string | undefined;
  };
};

type CreatePostActionType =
  | "changed_created_post"
  | "changed_post_category"
  | "changed_title"
  | "changed_file"
  | "changed_post"
  | "";

type CreatePostState = Omit<PostType, "timestamp" | "author"> & {
  file: File | null;
};

type CreatePostAction = {
  type: CreatePostActionType;
  newTitle: string;
  newPost: string;
  newPostCategory: string;
  newImgUrl: string;
  newImgPath: string;
  newFile: File | null;
};

type CreatePostStateAction =
  | {
      changeCreatedPost: (
        title: string,
        post: string,
        postCategory: string,
        imgUrl: string,
        imgPath: string
      ) => void;
      changeTitle: (title: string) => void;
      changePostCategory: (postCategory: string) => void;
      changePost: (post: string) => void;
      changeFile: (file: File | null) => void;
    }
  | Record<string, never>;

type CreatePostContext = {
  createPostState: CreatePostState;
  createPostStateAction: CreatePostStateAction;
};

export type Children = { children: ReactNode };

export type {
  GlobalContext,
  GlobalState,
  GlobalAction,
  GlobalStateAction,
  CreatePostState,
  CreatePostAction,
  CreatePostStateAction,
  CreatePostContext,
  NewsType,
  PostType,
  ChangeNews,
  ChangeIsLoading,
  DataCollectionRef,
  IncrementRenderCount,
};
