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
import { ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useAppContext } from '../App';
import blogPhoto from '../assets/tumpukan_buku.jpg';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../utils/firebase';

type ArticleProps = {
  title: string;
  postText: string;
  articleID: string;
  type: string;
};

function ArticleCard({ title, postText, articleID, type }: ArticleProps) {
  // get state from App component
  const { isAuth } = useAppContext();

  // delete doc or article on firebase database based on doc id
  const deletePost = async (id: string) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
    window.location.reload();
  };

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
          />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter px={2}>
        <ButtonGroup spacing="2">
          {/* navigate to /article and send article id on search text for later use */}
          <Link to={`/${type}?id=${articleID}`}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
              size={'sm'}
            >
              Lanjut Baca...
            </Button>
          </Link>

          {/* delete selected article based on article id */}
          {isAuth && (
            <Button
              rightIcon={<DeleteIcon />}
              colorScheme="teal"
              variant="outline"
              size={'sm'}
              onClick={() => {
                deletePost(articleID);
              }}
            >
              Hapus Artikel
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ArticleCard;
