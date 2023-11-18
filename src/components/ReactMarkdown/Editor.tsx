import { IconEdit } from "@tabler/icons-react";
import { useMarkdownContext } from "./ReactMarkdown";
import { cn } from "../../utils/utils";
import clsx from "clsx";
import MarkdownHeader from "./MarkdownHeader";
import { useCreatePostContext } from "../CreatePost";

const Editor = () => {
  const { maximizeEditor, maximizePreview, setMaximizeEditor, sideBySide } =
    useMarkdownContext();

  const { post, setPost } = useCreatePostContext();

  const handleClick = () => {
    setMaximizeEditor(!maximizeEditor);
  };

  return (
    <div
      className={clsx("shadow-sm shadow-black", {
        hidden: maximizePreview,
      })}
    >
      <MarkdownHeader
        handleClick={handleClick}
        maximize={maximizeEditor}
        icon={<IconEdit className="absolute left-0" />}
        text={"Editor"}
      />
      <textarea
        className={cn("min-w-[100vw] px-1 min-h-[40vh]", [
          [
            "sm:min-w-[90vw] sm:px-3",
            {
              "sm:min-w-[45vw] min-h-[221vh]": sideBySide && !maximizeEditor,
            },
          ],
          [
            "md:min-w-[60vw] md:min-h-[50vh]",
            {
              "md:min-w-[45vw] md:min-h-[223vh]": sideBySide && !maximizeEditor,
              "min-h-[95vh] md:min-h-[95vh] md:min-w-[70vw]": maximizeEditor,
            },
          ],
        ])}
        name="editor"
        id="editor"
        onChange={(e) => setPost(e.target.value)}
        defaultValue={post}
      />
    </div>
  );
};

export default Editor;
