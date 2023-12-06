import { AbsoluteCenter, Box, CircularProgress } from '@chakra-ui/react';

const LoadingSection = () => {
  return (
    <Box h={'100vh'} position={'relative'}>
      <AbsoluteCenter>
        <CircularProgress isIndeterminate color="#009f5b" />
      </AbsoluteCenter>
    </Box>
  );
};

export default LoadingSection;
