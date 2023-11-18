import { useState, createContext, useContext } from "react";
import { cn } from "../../utils/utils";
import LayoutToggle from "./LayoutToggle";
import Editor from "./Editor";
import Preview from "./Preview";

type MarkdownContextProps = {
  maximizeEditor: boolean;
  setMaximizeEditor: (maximizeEditor: boolean) => void;
  maximizePreview: boolean;
  setMaximizePreview: (maximizePreview: boolean) => void;
  sideBySide: boolean;
  setSideBySide: (sideBySide: boolean) => void;
};

const MarkdownContext = createContext<MarkdownContextProps>({
  maximizeEditor: false,
  setMaximizeEditor: () => {},
  maximizePreview: false,
  setMaximizePreview: () => {},
  sideBySide: false,
  setSideBySide: () => {},
});

export const useMarkdownContext = () => useContext(MarkdownContext);

function ReactMarkdown() {
  const [maximizeEditor, setMaximizeEditor] = useState(false);
  const [maximizePreview, setMaximizePreview] = useState(false);
  const [sideBySide, setSideBySide] = useState(false);

  return (
    <MarkdownContext.Provider
      value={{
        maximizeEditor,
        setMaximizeEditor,
        maximizePreview,
        setMaximizePreview,
        sideBySide,
        setSideBySide,
      }}
    >
      <div
        className={cn("flex flex-col items-center gap-5 sm:py-4 relative", {
          "gap-2 flex-row items-start sm:pt-10 md:gap-3":
            sideBySide && !maximizeEditor && !maximizePreview,
        })}
      >
        <LayoutToggle />
        <Editor />
        <Preview />
      </div>
    </MarkdownContext.Provider>
  );
}

export default ReactMarkdown;
