import { Button, Center, useDisclosure } from "@chakra-ui/react";
import {
  DocumentData,
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
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
import PostCategoryOption from "../components/CreatePost/PostCategoryOption";
import ActionAlertDialog from "../components/ActionAlertDialog";
import LoadingSection from "../components/LoadingSection";

// create context to share state across children
type CreatePostContent = {
  post: string;
  title: string;
  postCategory: string;
  imgUrl: string;
  file: File | null;
  setPost: (post: string) => void;
  setTitle: (title: string) => void;
  setPostCategory: (postCategory: string) => void;
  setFile: (file: File) => void;
};

const createPostContext = createContext<CreatePostContent>({
  post: "",
  title: "",
  postCategory: "berita-sekolah",
  imgUrl: "",
  file: null,
  setPost: () => {},
  setPostCategory: () => {},
  setTitle: () => {},
  setFile: () => {},
});

export const useCreatePostContext = () => useContext(createPostContext);

type CreatePostProps = {
  forEdit?: boolean;
};

const CreatePost = ({ forEdit = false }: CreatePostProps) => {
  // get state from App component
  const {
    isAuth,
    isLoading,
    renderCount,
    setRenderCount,
    setIsLoading,
    navigate,
    getSingleData,
  } = useAppContext();

  const { onOpen, isOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState<string>("Judul...");
  const [post, setPost] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [postCategory, setPostCategory] = useState<string>("berita-sekolah");
  const [postEdited, setPostEdited] = useState<DocumentData>();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgPath, setImgPath] = useState<string>("");

  // get post id from search params and store it at postID
  const searchParams = new URLSearchParams(location.search);
  const postID: string = searchParams.get("id")!;

  useEffect(() => {
    // avoid navigate here when user not login
    if (!isAuth) {
      navigate("/login");
    }

    // check is it for Edit
    if (forEdit) {
      getSingleData(setPostEdited, "news", postID);
    }
  }, []);

  useEffect(() => {
    setPost(postEdited?.post);
    setTitle(postEdited?.title);
    setPostCategory(postEdited?.postCategory);
    setImgUrl(postEdited?.imgUrl);
    setImgPath(postEdited?.imgPath);
  }, [postEdited]);

  // add doc on firebase database on posts collection then navigate to home
  const createPost = async (imgURL: string, imgPath: string) => {
    const postCollectionRef = collection(db, "news");
    await addDoc(postCollectionRef, {
      title,
      post,
      postCategory,
      imgUrl: imgURL,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    }).catch((err) => console.log(err));
    setRenderCount(renderCount + 1);
    navigate("/");
  };

  // upload image in storage and then save downloadUrl to referred doc on firestore
  const uploadFile = () => {
    if (file === null) {
      alert("Please select an image");
      return;
    }

    setIsLoading(true);

    const imgPath = `post-image/${uuidv4()}`;
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

  // replace whatever change to the referred post id
  const updateCreatePost = async (imgURL: string, imgPath: string) => {
    const postCollectionRef = doc(db, "news", postID);
    await setDoc(postCollectionRef, {
      title,
      post,
      postCategory,
      imgUrl: imgURL,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    }).catch((err) => console.log(err));

    setRenderCount(renderCount + 1);
    navigate("/");
  };

  // Update post
  const updatePost = () => {
    if (file === null && imgUrl == "") {
      alert("Please select an image");
      return;
    }

    setIsLoading(true);

    // if file exist replace old file with new file
    if (file !== null) {
      const imageRef = storageRef(storage, imgPath);

      uploadBytes(imageRef, file)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              updateCreatePost(url, imgPath);
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      updateCreatePost(imgUrl, imgPath);
    }

    console.log("akhir");
  };

  return (
    <createPostContext.Provider
      value={{
        post,
        title,
        file,
        postCategory,
        imgUrl,
        setPost,
        setTitle,
        setFile,
        setPostCategory,
      }}
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
            onClickHandler={forEdit ? updatePost : uploadFile}
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
