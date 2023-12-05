import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../App';

type ArticleProps = {
  title: string;
  postText: string;
  postID: string;
  imgURL: string;
  timestamp: string;
  postCategory: string;
  cardMaxW: string | number;
};

function ArticleCard({
  title,
  postText,
  postID,
  imgURL,
  timestamp,
  postCategory,
  cardMaxW,
}: ArticleProps) {
  // get state from App
  const { toReadableDate } = useAppContext();
  return (
    <>
      <Card
        maxW={cardMaxW}
        mx={2}
        size={'sm'}
        border={'none'}
        shadow={'none'}
        position={'relative'}
      >
        <img
          src={imgURL}
          alt="Card Post Image"
          className="w-full h-40 object-cover object-center"
        />
        <div className="bg-black/50 text-white backdrop-blur-md absolute top-0 right-0 px-1">
          {postCategory === 'berita-sekolah' && 'Berita Sekolah'}
          {postCategory === 'informasi' && 'Informasi'}
          {postCategory === 'pengumuman' && 'Pengumuman'}
        </div>
        <CardBody px={2} mt={'-20px'}>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              fontSize={'smaller'}
              color={'slategray'}
            >
              <span>BY @ADMIN</span>
              <span className="uppercase">{toReadableDate(timestamp)}</span>
            </Box>
            <Box
              fontSize={'small'}
              noOfLines={3}
              dangerouslySetInnerHTML={{ __html: postText }}
            />
          </Stack>
        </CardBody>
        <Divider border={'1px solid lime'} />
        <CardFooter px={2}>
          {/* navigate to /article and send article id on search text for later use */}
          <Link to={`/news/${postCategory}/detail?id=${postID}`}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
              size={'sm'}
            >
              Lanjut Baca...
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default ArticleCard;
