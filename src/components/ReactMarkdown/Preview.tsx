import { IconBlockquote } from "@tabler/icons-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import clsx from "clsx";
import MarkdownHeader from "./MarkdownHeader";
import { useMarkdownContext } from "./ReactMarkdown";
import { cn } from "../../utils/utils";

const Preview = () => {
  const {
    maximizeEditor,
    maximizePreview,
    setMaximizePreview,
    markdown,
    sideBySide,
  } = useMarkdownContext();

  const handleClick = () => {
    setMaximizePreview(!maximizePreview);
  };
  return (
    <div
      className={clsx("shadow-sm shadow-black", {
        hidden: maximizeEditor,
      })}
    >
      <MarkdownHeader
        handleClick={handleClick}
        maximize={maximizePreview}
        icon={<IconBlockquote className="absolute left-0" />}
        text={"Preview"}
      />
      <Markdown
        className={cn(
          "prose prose-sm min-w-[100vw] p-1 leading-5 bg-slate-200",
          [
            [
              "sm:prose-base sm:min-w-[90vw] sm:px-4",
              { "sm:min-w-[40vw] sm:px-1": sideBySide && !maximizePreview },
            ],
            [
              "md:prose-lg md:min-w-[70vw]",
              { "md:min-w-[53vw]": sideBySide && !maximizePreview },
            ],
          ],
          [
            "prose-headings:border-b prose-headings:border-black",
            "prose-p:whitespace-pre-wrap",
            [
              "prose-table:max-w-fit",
              "prose-td:border-black prose-td:border prose-td:p-1",
              "prose-th:border-black prose-th:border prose-th:p-1",
            ],
            "prose-blockquote:border-l-4 prose-blockquote:border-slate-500 prose-blockquote:ml-3",
            "prose-pre:p-0",
            "marker:text-black",
          ]
        )}
        remarkPlugins={[remarkGfm]}
        children={`${markdown}`}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                // {...rest}
                children={String(children).replace(/\n$/, "")}
                style={atomDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...rest} className={cn("bg-white", className)}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Preview;
