import { Box, Container, Divider, Heading } from '@chakra-ui/react';

type ContentProps = {
  children: any;
  title: string;
};

type SectionProps = ContentProps;

const TextContent = ({ children, title }: ContentProps) => {
  return (
    <Container maxW={{ sm: '70vw' }}>
      <Box
        position="relative"
        py="5"
        mb={{ base: 0, sm: 2 }}
        display={'flex'}
        alignItems={'center'}
      >
        <Divider border={'2px #009f5b solid'} />
        <Box bg="white" pr="4" position={'absolute'}>
          <Heading size={{ base: 'lg', sm: 'xl' }}>{title}</Heading>
        </Box>
      </Box>
      {children}
    </Container>
  );
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <Container maxW={{ sm: '70vw' }}>
      <Heading size={{ base: 'md', sm: 'lg' }}>{title}</Heading>
      <Divider border={'1px #009f5b dashed'} />
      {children}
    </Container>
  );
};

TextContent.Section = Section;

export default TextContent;
