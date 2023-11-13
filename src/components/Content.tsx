import { Box, Heading } from "@chakra-ui/react";

type ContentProps = {
  children: any;
  title: string;
};

const Content = ({ children, title }: ContentProps) => {
  return (
    <Box>
      <Heading size={{ base: "lg", sm: "xl" }} mb={2} textAlign={"center"}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default Content;
