import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Heading,
  Hide,
  Show,
  StackDivider,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

type PostEditorProps = {
  post: string;
  title: string;
  file: any;
  setPost: (title: string) => void;
  setTitle: (title: string) => void;
};

const PostEditor = ({
  post,
  setPost,
  title,
  setTitle,
  file,
}: PostEditorProps) => {
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
            <img
              src={file}
              alt="blah blah"
              className="w-full h-[200px] object-cover object-center"
            />
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
    </>
  );
};

export default PostEditor;
