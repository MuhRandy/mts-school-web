import {
  Button,
  Editable,
  EditablePreview,
  EditableInput,
  Box,
  Heading,
  HStack,
  StackDivider,
  Center,
  Show,
  Hide,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "../utils/firebase";
import { useAppContext } from "../App";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  // get state from App component
  const { isAuth, navigate } = useAppContext();

  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  const postPathRef = useRef<any>();

  const [title, setTitle] = useState<string>("Judul...");
  const [post, setPost] = useState<string>("");

  // initialize module and format extension for quill editor
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  const formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  // add doc on firebase database on posts collection then navigate to home
  const createPost = async (path: string) => {
    const postCollectionRef = collection(db, path);

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

  useEffect(() => {
    // avoid navigate to here when user not login
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Show above="md">
        <HStack divider={<StackDivider />}>
          <Editable
            defaultValue="Judul..."
            fontSize={"4xl"}
            fontWeight={"bold"}
            minH={"100vh"}
            mx={{ base: 2 }}
            w={"45vw"}
          >
            <EditablePreview />
            <EditableInput onChange={(e) => setTitle(e.target.value)} />
            <ReactQuill
              theme="snow"
              value={post}
              onChange={setPost}
              modules={modules}
              formats={formats}
              placeholder="Post..."
            />
          </Editable>
          <Box minH={"100vh"} w={"50vw"}>
            <Heading>{title}</Heading>
            <Box
              dangerouslySetInnerHTML={{ __html: post }}
              className="ql-editor"
            ></Box>
          </Box>
        </HStack>
      </Show>
      <Hide above="md">
        <Editable
          defaultValue="Judul..."
          fontSize={"4xl"}
          fontWeight={"bold"}
          minH={"100vh"}
          mx={{ base: "20px", sm: "auto" }}
          w={{ base: "auto", sm: "80vw" }}
        >
          <EditablePreview />
          <EditableInput onChange={(e) => setTitle(e.target.value)} />
          <ReactQuill
            theme="snow"
            value={post}
            onChange={setPost}
            modules={modules}
            formats={formats}
            placeholder="Post..."
          />
        </Editable>
      </Hide>
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

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={postPathRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Publish Postingan
            </AlertDialogHeader>

            <AlertDialogBody>Pilih kategori postingan Anda.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={postPathRef} onClick={onClose}>
                Batal
              </Button>
              <Button
                size={{ base: "sm", sm: "md" }}
                color={"white"}
                bgColor={"lime"}
                onClick={() => {
                  createPost("posts");
                }}
                ml={3}
              >
                Artikel
              </Button>
              <Button
                size={{ base: "sm", sm: "md" }}
                color={"white"}
                bgColor={"lime"}
                onClick={() => {
                  createPost("news");
                }}
                ml={3}
              >
                Berita
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CreatePost;
