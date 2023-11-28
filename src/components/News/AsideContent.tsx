import { Box, Heading } from "@chakra-ui/react";
import clsx from "clsx";
import { ReactNode } from "react";

type AsideContentProps = {
  children: ReactNode;
  title: string;
  noBackground?: boolean;
};

const AsideContent = ({
  children,
  title,
  noBackground = false,
}: AsideContentProps) => {
  return (
    <Box
      className={clsx({
        "p-4 shadow-lg border-l-8 border-lime-500 bg-lime-200 mb-5":
          !noBackground,
      })}
    >
      <Heading fontSize={"xl"} mb={2}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default AsideContent;
