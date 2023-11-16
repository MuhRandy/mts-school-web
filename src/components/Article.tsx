import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import blogPhoto from "../assets/tumpukan_buku.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type ArticleProps = {
  title: string;
  postText: string;
};

function Article({ title, postText }: ArticleProps) {
  return (
    <Card maxW="sm" mx={2} size={"sm"} px={2}>
      <CardBody>
        <img
          src={blogPhoto}
          alt="Green double couch with wooden legs"
          className="rounded-lg w-auto"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text fontSize={"small"} noOfLines={3}>
            {postText}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
            size={"sm"}
          >
            Read more
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Article;
