import { IconLayoutNavbar, IconLayoutSidebar } from "@tabler/icons-react";
import clsx from "clsx";
import { useMarkdownContext } from "./ReactMarkdown";

const LayoutToggle = () => {
  const { sideBySide, setSideBySide, maximizeEditor, maximizePreview } =
    useMarkdownContext();

  const handleClick = () => {
    setSideBySide(!sideBySide);
  };

  return (
    <button
      className={clsx(
        "bg-black text-white absolute top-1 right-1 p-[2px] rounded-lg hidden sm:inline-block",
        { hidden: maximizeEditor || maximizePreview }
      )}
      onClick={handleClick}
    >
      <IconLayoutNavbar className={clsx({ hidden: !sideBySide })} />
      <IconLayoutSidebar className={clsx({ hidden: sideBySide })} />
    </button>
  );
};

export default LayoutToggle;
