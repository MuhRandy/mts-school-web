import { Container, Divider, Heading } from "@chakra-ui/react";

type ContentProps = {
  children: any;
  title: string;
};

type SectionProps = ContentProps;

const TextContent = ({ children, title }: ContentProps) => {
  return (
    <Container maxW={{ sm: "90vw" }}>
      <Heading size={{ base: "lg", sm: "xl" }} mb={2}>
        {title}
      </Heading>
      {children}
    </Container>
  );
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <Container maxW={{ sm: "90vw" }}>
      <Heading size={{ base: "md", sm: "lg" }}>{title}</Heading>
      <Divider />
      {children}
    </Container>
  );
};

TextContent.Section = Section;

export default TextContent;
