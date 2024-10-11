import { Button, Center, useDisclosure } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import PostEditor from "../components/CreatePost/PostEditor";
import PostCategoryOption from "../components/CreatePost/PostCategoryOption";
import ActionAlertDialog from "../components/ActionAlertDialog";
import LoadingSection from "../components/LoadingSection";
import { initialCreatePostState, createPostContext } from "../utils/context";
import { createPostReducer } from "../utils/reducer";
import { CreatePostStateAction } from "../utils/type";
import { getSingleData } from "../services/GetDataService";
import { updatePost } from "../services/UpdateDataService";
import { uploadFile } from "../services/UploadDataService";
import {
  useAppStatusContext,
  useAppStatusDispatchContext,
} from "../services/state/AppStatusContext";
import { useNavigate } from "react-router-dom";

type CreatePostProps = {
  forEdit?: boolean;
};

const CreatePost = ({ forEdit = false }: CreatePostProps) => {
  const { isAuth, isLoading } = useAppStatusContext();
  const appStatusDispatch = useAppStatusDispatchContext();

  function changeIsLoading(newIsLoading: boolean) {
    appStatusDispatch({
      type: "changed_is_loading",
      isLoading: newIsLoading,
    });
  }

  function changeWantToLogin(newWantToLogin: boolean) {
    appStatusDispatch({
      type: "changed_want_to_login",
      wantToLogin: newWantToLogin,
    });
  }

  function incrementRenderCount() {
    appStatusDispatch({
      type: "incremented_render_count",
    });
  }

  const navigate = useNavigate();

  const [createPostState, dispatch] = useReducer(
    createPostReducer,
    initialCreatePostState
  );

  const { postCategory, title, post, imgUrl, imgPath, file } = createPostState;

  const initialDispatchValue = {
    type: "",
    newPostCategory: postCategory,
    newTitle: title,
    newPost: post,
    newImgUrl: imgUrl,
    newImgPath: imgPath,
    newFile: file,
  };

  const changeTitle = (newTitle: string) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_title",
      newTitle,
    });
  };

  const changePostCategory = (newPostCategory: string) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_post_category",
      newPostCategory,
    });
  };

  const changePost = (newPost: string) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_post",
      newPost,
    });
  };

  const changeFile = (newFile: File | null) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_file",
      newFile,
    });
  };

  const changeCreatedPost = (
    newTitle: string,
    newPost: string,
    newPostCategory: string,
    newImgUrl: string,
    newImgPath: string
  ) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_created_post",
      newTitle,
      newPost,
      newPostCategory,
      newImgUrl,
      newImgPath,
    });
  };

  const createPostStateAction: CreatePostStateAction = {
    changeTitle,
    changePostCategory,
    changePost,
    changeFile,
    changeCreatedPost,
  };

  const { onOpen, isOpen, onClose } = useDisclosure();

  const [postEdited, setPostEdited] = useState<DocumentData>();

  // get post id from search params and store it at postID
  const searchParams = new URLSearchParams(location.search);
  const postID: string = searchParams.get("id")!;

  useEffect(() => {
    // avoid navigate here when user not login
    if (!isAuth) {
      navigate("/");
      changeWantToLogin(true);
    }

    // check is it for Edit
    if (forEdit) {
      getSingleData(setPostEdited, "news", postID, changeIsLoading);
    }
  }, []);

  useEffect(() => {
    changeCreatedPost(
      postEdited?.title,
      postEdited?.post,
      postEdited?.postCategory,
      postEdited?.imgUrl,
      postEdited?.imgPath
    );
  }, [postEdited]);

  const updatePostHandler = () => {
    updatePost(
      postID,
      createPostState,
      changeIsLoading,
      incrementRenderCount,
      navigate
    );
  };

  const uploadFileHandler = () => {
    uploadFile(
      createPostState,
      changeIsLoading,
      incrementRenderCount,
      navigate
    );
  };

  return (
    <createPostContext.Provider
      value={{ createPostState, createPostStateAction }}
    >
      {!isLoading ? (
        <>
          <PostCategoryOption />
          <PostEditor />
          <Center>
            <Button
              size={{ base: "sm", sm: "md" }}
              mt={"10px"}
              color={"white"}
              bgColor={"lime"}
              onClick={onOpen}
            >
              {forEdit ? "Update" : "Publish"}
            </Button>
          </Center>

          <ActionAlertDialog
            isOpen={isOpen}
            isLoading={isLoading}
            headerText={forEdit ? "Update Berita" : "Publish Berita"}
            bodyText="Apa Anda Yakin?"
            confirmationText={forEdit ? "Update" : "Publish"}
            onClickHandler={forEdit ? updatePostHandler : uploadFileHandler}
            onClose={onClose}
          />
        </>
      ) : (
        <LoadingSection />
      )}
    </createPostContext.Provider>
  );
};

export default CreatePost;
