import { Button, Center, useDisclosure } from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, storage } from "../utils/firebase";
import { useAppContext } from "../App";
import { v4 as uuidv4 } from "uuid";
import {
  getDownloadURL,
  uploadBytes,
  ref as storageRef,
} from "firebase/storage";
import PostEditor from "../components/CreatePost/PostEditor";
import PostAlertDialog from "../components/CreatePost/PostAlertDialog";
import PostCategoryOption from "../components/CreatePost/PostCategoryOption";

// create context to share state across children
type CreatePostContent = {
  post: string;
  title: string;
  postCategory: string;
  file: File | null;
  setPost: (post: string) => void;
  setTitle: (title: string) => void;
  setPostCategory: (postCategory: string) => void;
  setFile: (file: File) => void;
};

const createPostContext = createContext<CreatePostContent>({
  post: "",
  title: "",
  postCategory: "",
  file: null,
  setPost: () => {},
  setPostCategory: () => {},
  setTitle: () => {},
  setFile: () => {},
});

export const useCreatePostContext = () => useContext(createPostContext);

const CreatePost = () => {
  // get state from App component
  const { isAuth, navigate } = useAppContext();

  const { onOpen, isOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState<string>("Judul...");
  const [post, setPost] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [postCategory, setPostCategory] = useState<string>("berita-sekolah");

  // add doc on firebase database on posts collection then navigate to home
  const createPost = async (imgUrl: string, imgPath: string) => {
    const postCollectionRef = collection(db, "news");
    await addDoc(postCollectionRef, {
      title,
      post,
      postCategory,
      imgUrl,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    }).catch((err) => console.log(err));
    navigate("/");
    window.location.reload();
  };

  // upload image in storage and then save downloadUrl to referred doc on firestore
  const uploadFile = () => {
    if (file === null) {
      alert("Please select an image");
      return;
    }

    const imgPath = `post-image/${postCategory}/${uuidv4()}`;
    const imageRef = storageRef(storage, imgPath);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            createPost(url, imgPath);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    // avoid navigate here when user not login
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <createPostContext.Provider
      value={{
        post,
        title,
        file,
        postCategory,
        setPost,
        setTitle,
        setFile,
        setPostCategory,
      }}
    >
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
          Publish
        </Button>
      </Center>

      <PostAlertDialog
        uploadFile={uploadFile}
        isOpen={isOpen}
        onClose={onClose}
      />
    </createPostContext.Provider>
  );
};

export default CreatePost;
