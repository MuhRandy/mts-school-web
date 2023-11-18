import {
  Button,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { useAppContext } from "../App";
import ReactMarkdown from "./ReactMarkdown/ReactMarkdown";

type CreatePostContextProps = {
  title: string;
  post: string;
  setPost: (post: string) => void;
};

const CreatePostContext = createContext<CreatePostContextProps>({
  title: "Judul...",
  post: "",
  setPost: () => {},
});

export const useCreatePostContext = () => useContext(CreatePostContext);

const CreatePost = () => {
  const { isAuth, navigate } = useAppContext();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  const defaultMarkdown =
    "## This is a sub-heading...\n\n" +
    "### And here's some other cool stuff:\n\n" +
    "Heres some code, `<div></div>`, between 2 backticks.\n\n" +
    "~~~js\n" +
    "// this is multi-line code:\n\n" +
    "function anotherExample(firstLine, lastLine) {\n" +
    "  if (firstLine == '```' && lastLine == '```') {\n" +
    "    return multiLineCode;\n" +
    "  }\n" +
    "}\n" +
    "~~~\n\n" +
    "You can also make text **bold**... whoa!\n" +
    "Or _italic_.\n" +
    "Or... wait for it... **_both!_** \n" +
    "And feel free to go crazy ~~crossing stuff out~~.\n\n" +
    "There's also [links](https://www.freecodecamp.org), and\n\n" +
    "> Block Quotes!\n\n" +
    "And if you want to get really crazy, even tables:\n\n" +
    "| Wild Header      | Crazy Header    | Another Header?    |\n" +
    "| ---------------- | --------------- | ------------------ |\n" +
    "| Your content can | be here, and it | can be here....    |\n" +
    "| And here.        | Okay.           | I think we get it. |\n\n" +
    "- And of course there are lists.\n" +
    "  - Some are bulleted.\n" +
    "    - With different indentation levels.\n" +
    "      - That look like this.\n\n" +
    "1. And there are numbered lists too.\n" +
    "1. Use just 1s if you want!\n" +
    "1. And last but not least, let's not forget embedded images:\n\n" +
    "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

  const [title, setTitle] = useState<string>("Judul...");
  const [post, setPost] = useState<string>(defaultMarkdown);

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
    <>
      <CreatePostContext.Provider value={{ title, post, setPost }}>
        <Editable defaultValue="Judul..." fontSize={"xl"} fontWeight={"bold"}>
          <EditablePreview />
          <EditableInput onChange={(e) => setTitle(e.target.value)} />
        </Editable>
        {/* <Card>
      <Divider />
      <Editable defaultValue="Postingan..." minH={"100px"}>
        <EditablePreview />
        <EditableTextarea onChange={(e) => setPost(e.target.value)} />
      </Editable>
    </Card> */}
        <ReactMarkdown />
        <Button size={"sm"} mt={"10px"} onClick={createPost}>
          Publish
        </Button>
      </CreatePostContext.Provider>
    </>
  );
};

export default CreatePost;
