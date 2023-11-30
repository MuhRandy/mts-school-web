import { AbsoluteCenter, Box, CircularProgress } from "@chakra-ui/react";

const LoadingSection = () => {
  return (
    <Box h={"100vh"} position={"relative"}>
      <AbsoluteCenter>
        <CircularProgress isIndeterminate color="lime" />
      </AbsoluteCenter>
    </Box>
  );
};

export default LoadingSection;
