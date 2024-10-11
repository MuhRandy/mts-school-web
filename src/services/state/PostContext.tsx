import { createContext, Dispatch, useContext, useReducer } from "react";
import { PostData } from "../../models/Post";
import { Children } from "../../utils/type";

export type Post = Omit<PostData, "timestamp" | "author"> & {
  file: File | null;
};

type CreatePostAction =
  | {
      type: "changed_post";
      postData: Post;
    }
  | {
      type: "changed_title";
      postTitle: string;
    }
  | {
      type: "changed_category";
      postCategory: string;
    }
  | {
      type: "changed_content";
      postContent: string;
    }
  | {
      type: "changed_file";
      file: File;
    }
  | Record<string, never>;

const initialPost: Post = {
  title: "Judul...",
  post: "",
  postCategory: "berita-sekolah",
  imgUrl: "",
  imgPath: "",
  file: null,
};

export const PostContext = createContext<Post>(initialPost);
export const PostDispatchContext = createContext<Dispatch<CreatePostAction>>(
  () => {}
);

export function usePostContext() {
  return useContext(PostContext);
}
export function usePostDispatchContext() {
  return useContext(PostDispatchContext);
}

export function PostProvider({ children }: Children) {
  const [post, dispatch] = useReducer(postReducer, initialPost);

  return (
    <PostContext.Provider value={post}>
      <PostDispatchContext.Provider value={dispatch}>
        {children}
      </PostDispatchContext.Provider>
    </PostContext.Provider>
  );
}

export default PostProvider;

function postReducer(state: Post, action: CreatePostAction) {
  switch (action.type) {
    case "changed_post":
      return action.postData;

    case "changed_title":
      return {
        ...state,
        title: action.postTitle,
      };

    case "changed_category":
      return {
        ...state,
        postCategory: action.postCategory,
      };

    case "changed_content":
      return {
        ...state,
        post: action.postContent,
      };

    case "changed_file":
      return {
        ...state,
        file: action.file,
      };

    default:
      throw new Error(`No such action: ${action}`);
  }
}
