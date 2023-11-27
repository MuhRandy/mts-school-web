import { Button, Center, useDisclosure } from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db, storage } from "../../utils/firebase";
import { useAppContext } from "../../App";
import PostEditor from "./PostEditor";
import PostAlertDialog from "./PostAlertDialog";
import { v4 as uuidv4 } from "uuid";
import {
  getDownloadURL,
  uploadBytes,
  ref as storageRef,
} from "firebase/storage";

const CreatePost = () => {
  // get state from App component
  const { isAuth, navigate } = useAppContext();

  const { onOpen, isOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState<string>("Judul...");
  const [post, setPost] = useState<string>("");
  const [file, setFile] = useState<any>(null);

  // add doc on firebase database on posts collection then navigate to home
  const createPost = async (path: string, imgUrl: string) => {
    const postCollectionRef = collection(db, path);
    await addDoc(postCollectionRef, {
      title,
      post,
      imgUrl,
      timestamp: serverTimestamp(),
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    }).catch((err) => console.log(err));
    navigate("/");
    window.location.reload();
  };

  // upload image in storage and then save downloadUrl to referred doc on firestore
  const uploadFile = (path: string) => {
    if (file === null) {
      alert("Please select an image");
      return;
    }

    const imageRef = storageRef(storage, `post-image/${uuidv4()}`);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            createPost(path, url);
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
    <>
      <input
        type="file"
        name="image"
        id="image"
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      />
      <PostEditor
        title={title}
        setTitle={setTitle}
        post={post}
        setPost={setPost}
        file={file}
      />
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
    </>
  );
};

export default CreatePost;
