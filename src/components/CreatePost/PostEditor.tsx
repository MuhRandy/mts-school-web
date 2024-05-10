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
import DragNDrop from "./DragNDrop";
import { useCreatePostContext } from "../../utils/context";

const PostEditor = () => {
  // get state from CreatePost
  const { createPostState, createPostStateAction } = useCreatePostContext();

  const { title, post, file, imgUrl } = createPostState;
  const { changeTitle, changePost, changeFile } = createPostStateAction;

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

  console.log(title);

  return (
    <>
      <Show above="md">
        <HStack divider={<StackDivider />}>
          <Box>
            <Editable
              defaultValue="Judul..."
              fontSize={"4xl"}
              fontWeight={"bold"}
              textAlign={"center"}
              mx={2}
              w={"45vw"}
              value={title}
            >
              <EditablePreview />
              <EditableInput
                w={"auto"}
                onChange={(e) => changeTitle(e.target.value)}
              />
            </Editable>
            <ReactQuill
              theme="snow"
              value={post}
              onChange={changePost}
              modules={modules}
              formats={formats}
              placeholder="Post..."
              className="min-h-[100vh] w-[45vw] pl-2"
            />
          </Box>
          {/* Editor Preview */}
          <Box minH={"100vh"} w={"50vw"}>
            {/* drag 'n drop */}
            <DragNDrop file={file} setFile={changeFile} imgUrl={imgUrl} />
            <Heading textAlign={"center"}>{title}</Heading>
            <Box
              dangerouslySetInnerHTML={{ __html: post }}
              className="ql-editor"
            />
          </Box>
          {/*  */}
        </HStack>
      </Show>
      <Hide above="md">
        {/* drag 'N drop */}
        <DragNDrop file={file} setFile={changeFile} />
        <Editable
          defaultValue="Judul..."
          fontSize={"4xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          mx={{ base: "20px", sm: "auto" }}
          w={{ base: "auto", sm: "80vw" }}
        >
          <EditablePreview />
          <EditableInput onChange={(e) => changeTitle(e.target.value)} />
        </Editable>
        <ReactQuill
          theme="bubble"
          value={post}
          onChange={changePost}
          modules={modules}
          formats={formats}
          placeholder="Post..."
          className="min-h-[100vh]"
        />
      </Hide>
    </>
  );
};

export default PostEditor;
