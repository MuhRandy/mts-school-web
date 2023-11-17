import {
  IconArrowsMaximize,
  IconArrowsDiagonalMinimize2,
} from "@tabler/icons-react";
import clsx from "clsx";
import { ReactNode } from "react";

type MarkdownHeaderProps = {
  handleClick: () => void;
  maximize: boolean;
  icon: ReactNode;
  text: string;
};

const MarkdownHeader = ({
  handleClick,
  maximize,
  icon,
  text,
}: MarkdownHeaderProps) => {
  return (
    <div className="bg-black text-white text-center flex justify-center relative">
      {icon}
      {text}
      <button className="absolute right-0" onClick={handleClick}>
        <IconArrowsMaximize className={clsx({ hidden: maximize })} />
        <IconArrowsDiagonalMinimize2 className={clsx({ hidden: !maximize })} />
      </button>
    </div>
  );
};

export default MarkdownHeader;
