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
} from '@chakra-ui/react';
import blogPhoto from '../assets/tumpukan_buku.jpg';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

type ArticleProps = {
  title: string;
  postText: string;
};

function Article({ title, postText }: ArticleProps) {
  return (
    <Card maxW="sm" mx={2} size={'sm'} overflow={'hidden'}>
      <img
        src={blogPhoto}
        alt="Green double couch with wooden legs"
        className="w-auto"
      />
      <CardBody px={2} mt={'-20px'}>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text
            fontSize={'small'}
            noOfLines={3}
            dangerouslySetInnerHTML={{ __html: postText }}
          ></Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter px={2}>
        <ButtonGroup spacing="2">
          <Link to={`/article?title=${title}&post=${postText}`}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
              size={'sm'}
            >
              Read more
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Article;
