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
import { useAppContext } from "../App";
import { DocumentData, deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { useEffect, useState } from "react";
import LoadingSection from "../components/LoadingSection";
import ActionAlertDialog from "../components/ActionAlertDialog";
import { deleteObject, ref } from "firebase/storage";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function SinglePost() {
  // get state from App
  const {
    isLoading,
    isAuth,
    renderCount,
    navigate,
    setIsLoading,
    setRenderCount,
    getSingleData,
  } = useAppContext();

  const { onOpen, isOpen, onClose } = useDisclosure();

  const [post, setPost] = useState<DocumentData>();

  // get post id from search params and store it at postID
  const searchParams = new URLSearchParams(location.search);
  const postID: string = searchParams.get("id")!;

  useEffect(() => {
    getSingleData(setPost, "news", postID);
  }, []);

  // get post date from database
  const date = post?.timestamp.toDate();
  const days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const day = days[date?.getDay()];
  const month = months[date?.getMonth()];

  // delete doc or article on firebase database based on doc id
  const deletePost = async (id: string) => {
    setIsLoading(true);
    const imgRef = ref(storage, post?.imgPath);
    const postDoc = doc(db, "news", id);

    // delete image on storage
    deleteObject(imgRef).catch((err) => console.log(err));
    // delete post on firestore
    await deleteDoc(postDoc);
    setRenderCount(renderCount + 1);
    setIsLoading(false);
    navigate("/");
  };

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
                {day}, {date?.getDate()} {month} {date?.getFullYear()}
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
          deletePost(postID);
        }}
        onClose={onClose}
      />
    </Container>
  );
}

export default SinglePost;
