import { IconCalendarStats, IconUserCircle } from "@tabler/icons-react";
import { Container } from "@chakra-ui/react";
import { useAppContext } from "../App";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useEffect, useState } from "react";
import LoadingSection from "../components/LoadingSection";

function SinglePost() {
  // get state from App
  const { isLoading, setIsLoading } = useAppContext();

  const [post, setPost] = useState<DocumentData>();

  // get post id from search params and store it at postID
  const searchParams = new URLSearchParams(location.search);
  const postID: string = searchParams.get("id")!;

  // get post from firestore based on postID
  const getPost = async () => {
    setIsLoading(true);
    const docRef = doc(db, "news", postID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().title);
      setPost(docSnap.data());
      setIsLoading(false);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPost();
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

  return (
    <Container maxW={{ md: "70vw" }}>
      {!isLoading ? (
        <div className="p-2">
          {post?.imgUrl && (
            <img
              src={post?.imgUrl}
              alt={`Image Header for ${post?.title}`}
              className="w-full object-cover h-[400px]"
            />
          )}
          <h1 className="text-4xl font-bold my-3 text-center">{post?.title}</h1>
          {/* Author & Timestamp */}
          <div className="py-5 mb-7 flex flex-col items-center justify-between border-b-2 border-black sm:flex-row">
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
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: post?.post!,
            }}
            className="ql-editor"
          />
        </div>
      ) : (
        <LoadingSection />
      )}
    </Container>
  );
}

export default SinglePost;
