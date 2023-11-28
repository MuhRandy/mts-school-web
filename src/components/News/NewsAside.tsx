import { ListItem, UnorderedList } from "@chakra-ui/react";
import clsx from "clsx";
import { useAppContext } from "../../App";
import Posts from "./Posts";
import { useEffect, useState } from "react";
import AsideContent from "./AsideContent";

type NewsAsideContentProps = {
  postCategoryFilter: string;
  setPostCategoryFilter: (postCategoryFilter: string) => void;
};

const NewsAside = ({
  postCategoryFilter,
  setPostCategoryFilter,
}: NewsAsideContentProps) => {
  // get state from App
  const { news } = useAppContext();

  // filter to 3 newest news data if have more than 3
  const [newestPost, setNewestPost] = useState<any[] | null[]>(news);

  useEffect(() => {
    if (news.length > 3) {
      setNewestPost(news.slice(0, 3));
      console.log("slice");
    }
  }, [news]);

  return (
    <>
      <AsideContent title="Kategori Berita">
        <UnorderedList pl={2}>
          <ListItem
            w={"fit-content"}
            onClick={() => {
              setPostCategoryFilter("");
            }}
            cursor={"pointer"}
            className={clsx({
              "border-b border-black": postCategoryFilter === "",
            })}
          >
            Semua
          </ListItem>
          <ListItem
            w={"fit-content"}
            onClick={() => {
              setPostCategoryFilter("berita-sekolah");
            }}
            cursor={"pointer"}
            className={clsx({
              "border-b border-black": postCategoryFilter === "berita-sekolah",
            })}
          >
            Berita Sekolah
          </ListItem>
          <ListItem
            w={"fit-content"}
            onClick={() => {
              setPostCategoryFilter("informasi");
            }}
            cursor={"pointer"}
            className={clsx({
              "border-b border-black": postCategoryFilter === "informasi",
            })}
          >
            Informasi
          </ListItem>
          <ListItem
            w={"fit-content"}
            onClick={() => {
              setPostCategoryFilter("pengumuman");
            }}
            cursor={"pointer"}
            className={clsx({
              "border-b border-black": postCategoryFilter === "pengumuman",
            })}
          >
            Pengumuman
          </ListItem>
        </UnorderedList>
      </AsideContent>
      <AsideContent title="Berita Terbaru" noBackground={true}>
        {news && <Posts postsData={newestPost} />}
      </AsideContent>
    </>
  );
};

export default NewsAside;
