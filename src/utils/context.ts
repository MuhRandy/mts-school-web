import { createContext, useContext } from "react";
import {
  CreatePostContext,
  CreatePostState,
  GlobalContext,
  GlobalState,
} from "./type";

const initialState: GlobalState = {
  isAuth: Boolean(localStorage.getItem("IS_AUTH")),
  isLoading: false,
  renderCount: 0,
  wantToLogin: false,
  news: [],
};

const AppContext = createContext<GlobalContext>({
  state: initialState,
  globalStateAction: {},
});

const useAppContext = () => useContext(AppContext);

const initialCreatePostState: CreatePostState = {
  title: "Judul...",
  post: "",
  postCategory: "berita-sekolah",
  imgUrl: "",
  imgPath: "",
  file: null,
};

const createPostContext = createContext<CreatePostContext>({
  createPostState: initialCreatePostState,
  createPostStateAction: {},
});

const useCreatePostContext = () => useContext(createPostContext);

export {
  // AppContext,
  useAppContext,
  initialState,
  initialCreatePostState,
  createPostContext,
  useCreatePostContext,
};
