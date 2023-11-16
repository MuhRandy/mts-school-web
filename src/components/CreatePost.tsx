import {
  Button,
  Card,
  Divider,
  Editable,
  EditablePreview,
  EditableInput,
  EditableTextarea,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { useAppContext } from "../App";

const CreatePost = () => {
  const { isAuth, navigate } = useAppContext();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      post,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate("/");
  };

  return (
    <Card>
      <Editable defaultValue="Judul..." fontSize={"xl"} fontWeight={"bold"}>
        <EditablePreview />
        <EditableInput onChange={(e) => setTitle(e.target.value)} />
      </Editable>
      <Divider />
      <Editable defaultValue="Postingan..." minH={"100px"}>
        <EditablePreview />
        <EditableTextarea onChange={(e) => setPost(e.target.value)} />
      </Editable>
      <Button size={"sm"} mt={"10px"} onClick={createPost}>
        Publish
      </Button>
    </Card>
  );
};

export default CreatePost;
