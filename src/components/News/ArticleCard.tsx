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
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useAppContext } from "../../App";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../utils/firebase";
import { deleteObject, ref } from "firebase/storage";
import ActionAlertDialog from "../ActionAlertDialog";

type ArticleProps = {
  title: string;
  postText: string;
  postID: string;
  imgURL: string;
  imgPath: string;
  postCategory: string;
  cardMaxW: string | number;
};

function ArticleCard({
  title,
  postText,
  postID,
  imgURL,
  imgPath,
  postCategory,
  cardMaxW,
}: ArticleProps) {
  // get state from App component
  const { isAuth, isLoading, renderCount, setRenderCount } = useAppContext();

  // delete doc or article on firebase database based on doc id
  const deletePost = async (id: string) => {
    const imgRef = ref(storage, imgPath);
    const postDoc = doc(db, "news", id);

    deleteObject(imgRef).catch((err) => console.log(err));
    await deleteDoc(postDoc);
    setRenderCount(renderCount + 1);
  };

  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Card maxW={cardMaxW} mx={2} size={"sm"} overflow={"hidden"}>
        <img
          src={imgURL}
          alt="Card Post Image"
          className="w-full h-40 object-cover object-center"
        />
        <CardBody px={2} mt={"-20px"}>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text
              fontSize={"small"}
              noOfLines={3}
              dangerouslySetInnerHTML={{ __html: postText }}
            />
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter px={2}>
          <ButtonGroup spacing="2">
            {/* navigate to /article and send article id on search text for later use */}
            <Link to={`/news/${postCategory}/detail?id=${postID}`}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
                size={"sm"}
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
                size={"sm"}
                onClick={onOpen}
              >
                Hapus Artikel
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
      <ActionAlertDialog
        isOpen={isOpen}
        isLoading={isLoading}
        headerText="Hapus Berita"
        bodyText="Apa Anda Yakin?"
        confirmationText="Hapus"
        buttonColor="red"
        onClickHandler={() => {
          deletePost(postID);
        }}
        onClose={onClose}
      />
    </>
  );
}

export default ArticleCard;
