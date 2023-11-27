import { IconCalendarStats, IconUserCircle } from "@tabler/icons-react";
import { Container } from "@chakra-ui/react";
import { useAppContext } from "../App";

// type SinglePostProps = {
//   // postCategory: string;
//   // posts: any[];
// };

function SinglePost() {
  const date = new Date();

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

  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  // get state from App
  const { news } = useAppContext();

  // get post id from search text and store it at postID
  const searchParams = new URLSearchParams(location.search);
  const postID = searchParams.get("id");

  // filter post based on id which is unique so just one post will be returned and store it at singlePost
  const filteredPost = news.filter((post: any) => {
    return post.id == postID;
  });

  const singlePost = filteredPost[0];

  return (
    <Container maxW={"70vw"}>
      <div className="p-2">
        {singlePost?.imgUrl && (
          <img
            src={singlePost.imgUrl}
            alt={`Image Header for ${singlePost.title}`}
            className="w-full object-cover h-[400px]"
          />
        )}
        <h1 className="text-4xl font-bold my-3">{singlePost?.title}</h1>
        <div className="py-5 mb-7 flex items-center justify-between border-b-2 border-black">
          <div className="flex gap-2 items-center">
            <IconUserCircle
              size={35}
              className="hover:scale-125 transition duration-500"
            />
            <span className="font-semibold">@admin</span>
          </div>
          <div className="flex items-center gap-1">
            <IconCalendarStats size={20} stroke={1} />
            <span className="font-semibold">
              {day}, {date.getDate()} {month} {date.getFullYear()}
            </span>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: singlePost?.post!,
          }}
        ></div>
      </div>
    </Container>
  );
}

export default SinglePost;
