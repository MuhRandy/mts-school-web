import {
  CreatePostAction,
  CreatePostState,
  GlobalAction,
  GlobalState,
} from "./type";

const reducer = (state: GlobalState, action: GlobalAction) => {
  const { renderCount } = state;
  const { type, newNews, newIsLoading, newIsAuth, newWantToLogin } = action;

  switch (type) {
    case "changed_news":
      return {
        ...state,
        news: newNews,
      };

    case "incremented_render_count":
      return {
        ...state,
        renderCount: renderCount + 1,
      };

    case "changed_is_auth":
      return {
        ...state,
        isAuth: newIsAuth,
      };

    case "changed_is_loading":
      return {
        ...state,
        isLoading: newIsLoading,
      };

    case "changed_want_to_login":
      return {
        ...state,
        wantToLogin: newWantToLogin,
      };

    default:
      return state;
  }
};

const createPostReducer = (
  state: CreatePostState,
  action: CreatePostAction
) => {
  const {
    type,
    newTitle,
    newPost,
    newPostCategory,
    newImgUrl,
    newImgPath,
    newFile,
  } = action;

  switch (type) {
    case "changed_created_post":
      return {
        ...state,
        title: newTitle,
        post: newPost,
        postCategory: newPostCategory,
        imgUrl: newImgUrl,
        imgPath: newImgPath,
      };

    case "changed_title":
      return {
        ...state,
        title: newTitle,
      };

    case "changed_post_category":
      return {
        ...state,
        postCategory: newPostCategory,
      };

    case "changed_post":
      return {
        ...state,
        post: newPost,
      };

    case "changed_file":
      return {
        ...state,
        file: newFile,
      };

    default:
      return state;
  }
};

export { reducer, createPostReducer };
