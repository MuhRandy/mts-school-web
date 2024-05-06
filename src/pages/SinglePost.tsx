import {
  IconCalendarStats,
  IconTrash,
  IconUserCircle,
} from "@tabler/icons-react";
import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  IconButton,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import LoadingSection from "../components/LoadingSection";
import ActionAlertDialog from "../components/ActionAlertDialog";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useAppContext } from "../utils/context";
import { deletePost, getSingleData, toReadableDate } from "../utils/utils";

function SinglePost() {
  // get state from App
  const { state, globalStateAction } = useAppContext();

  const { isLoading, isAuth } = state;
  const { changeIsLoading, incrementRenderCount } = globalStateAction;

  const { onOpen, isOpen, onClose } = useDisclosure();

  const [post, setPost] = useState<DocumentData>();

  // get post id from search params and store it at postID
  const searchParams = new URLSearchParams(location.search);
  const postID: string = searchParams.get("id")!;

  useEffect(() => {
    getSingleData(setPost, "news", postID, changeIsLoading);
  }, []);

  return (
    <Container maxW={{ md: "70vw" }}>
      {!isLoading ? (
        <Box p={2} position={"relative"}>
          {isAuth && (
            <HStack position={"absolute"} right={0} top={0}>
              <Tooltip hasArrow label="Edit Berita">
                <Link to={`/edit-post?id=${postID}`}>
                  <IconButton
                    aria-label="Edit Berita"
                    colorScheme="teal"
                    icon={<EditIcon />}
                  />
                </Link>
              </Tooltip>
              <Tooltip hasArrow label="Hapus Berita">
                <IconButton
                  aria-label="Hapus Berita"
                  colorScheme="red"
                  onClick={onOpen}
                  icon={<IconTrash />}
                />
              </Tooltip>
            </HStack>
          )}
          {post?.imgUrl && (
            <img
              src={post?.imgUrl}
              alt={`Image Header for ${post?.title}`}
              className="w-full object-cover h-[400px]"
            />
          )}
          <Heading fontSize={"4xl"} my={3} textAlign={"center"}>
            {post?.title}
          </Heading>
          {/* Author & Timestamp */}
          <Box
            py={5}
            display={"flex"}
            flexDirection={{ base: "column", sm: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* Author */}
            <div className="flex gap-2 items-center">
              <IconUserCircle
                size={35}
                className="hover:scale-125 transition duration-500"
              />
              <span className="font-semibold">@admin</span>
            </div>
            {/* Timestamp */}
            <div className="flex items-center gap-1">
              <IconCalendarStats size={20} stroke={1} />
              <span className="font-semibold">
                {post && toReadableDate(post?.timestamp)}
              </span>
            </div>
          </Box>
          <Divider mb={7} border={"1px solid black"} />
          <div
            dangerouslySetInnerHTML={{
              __html: post?.post!,
            }}
            className="ql-editor"
          />
        </Box>
      ) : (
        <LoadingSection />
      )}

      <ActionAlertDialog
        isOpen={isOpen}
        isLoading={isLoading}
        headerText="Hapus Berita"
        bodyText="Apa Anda Yakin?"
        confirmationText="Hapus"
        buttonColor="red"
        onClickHandler={() => {
          deletePost(
            postID,
            changeIsLoading,
            incrementRenderCount,
            post?.imgPath
          );
        }}
        onClose={onClose}
      />
    </Container>
  );
}

export default SinglePost;
