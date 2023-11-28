import { Grid, GridItem } from "@chakra-ui/react";
import Main from "../components/Main";
import Posts from "../components/News/Posts";
import Content from "../components/Content";
import { useEffect, useState } from "react";
import { useAppContext } from "../App";
import NewsAside from "../components/News/NewsAside";

const News = () => {
  const { news } = useAppContext();

  const [postCategoryFilter, setPostCategoryFilter] = useState<string>("");
  const [posts, setPosts] = useState(news);

  useEffect(() => {
    if (postCategoryFilter !== "") {
      // filter post based on postCategory selected
      const filteredPost = news.filter((post: any) => {
        return post.postCategory === postCategoryFilter;
      });

      setPosts(filteredPost);
      console.log("posts filtered");
    } else {
      setPosts(news);
      console.log("post");
    }
  }, [postCategoryFilter, news]);

  return (
    <Content title="Berita">
      <Grid templateColumns={"repeat(3, 1fr)"} p={3}>
        <GridItem colSpan={2}>
          <Main>
            <Posts cardMaxW={"2xl"} postsData={posts} />
          </Main>
        </GridItem>
        <GridItem>
          <NewsAside
            postCategoryFilter={postCategoryFilter}
            setPostCategoryFilter={setPostCategoryFilter}
          />
        </GridItem>
      </Grid>
    </Content>
  );
};

export default News;
