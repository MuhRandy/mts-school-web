import { AbsoluteCenter, Box, Divider, Heading } from '@chakra-ui/react';

type ContentProps = {
  children: any;
  title: string;
};

const Content = ({ children, title }: ContentProps) => {
  return (
    <Box>
      <Box position="relative" padding="10" mb={10}>
        <Divider border={'2px #009f5b solid'} />
        <AbsoluteCenter bg="white" px="4">
          <Heading size={{ base: 'lg', sm: 'xl' }} mb={2} textAlign={'center'}>
            {title}
          </Heading>
        </AbsoluteCenter>
      </Box>
      {children}
    </Box>
  );
};

export default Content;
