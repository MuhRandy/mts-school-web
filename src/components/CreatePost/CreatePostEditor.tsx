import { Button, Center, useDisclosure } from "@chakra-ui/react";
import PostCategoryOption from "./PostCategoryOption";
import PostEditor from "./PostEditor";
import ActionAlertDialog from "../ActionAlertDialog";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAppStatusContext,
  useAppStatusDispatchContext,
} from "../../services/state/AppStatusContext";
import {
  Post,
  usePostContext,
  usePostDispatchContext,
} from "../../services/state/PostContext";
import { getSingleData } from "../../services/GetDataService";
import { updatePost } from "../../services/UpdateDataService";
import { uploadFile } from "../../services/UploadDataService";
import LoadingSection from "../LoadingSection";
import { CreatePostProps } from "../../pages/CreatePost";

function CreatePostEditor({ forEdit }: CreatePostProps) {
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

  const post = usePostContext();
  const dispatch = usePostDispatchContext();

  const changeCreatedPost = (newPost: Post) => {
    dispatch({
      type: "changed_post",
      postData: newPost,
    });
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
    changeCreatedPost({
      ...post,
      title: postEdited?.title,
      post: postEdited?.post,
      postCategory: postEdited?.postCategory,
      imgUrl: postEdited?.imgUrl,
      imgPath: postEdited?.imgPath,
    });
  }, [postEdited]);

  const updatePostHandler = () => {
    updatePost(postID, post, changeIsLoading, incrementRenderCount, navigate);
  };

  const uploadFileHandler = () => {
    uploadFile(post, changeIsLoading, incrementRenderCount, navigate);
  };

  return (
    <>
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
    </>
  );
}

export default CreatePostEditor;
