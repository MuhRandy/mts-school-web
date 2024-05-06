import { Grid, GridItem } from "@chakra-ui/react";
import Posts from "../components/News/Posts";
import Content from "../components/Content";
import { useEffect, useState } from "react";
import NewsAside from "../components/News/NewsAside";
import { useAppContext } from "../utils/context";

const News = () => {
  const { state } = useAppContext();

  const { news } = state;

  const [postCategoryFilter, setPostCategoryFilter] = useState<string>("");
  const [posts, setPosts] = useState(news);

  useEffect(() => {
    if (postCategoryFilter !== "") {
      // filter post based on postCategory selected
      const filteredPost = news.filter((post: any) => {
        return post.postCategory === postCategoryFilter;
      });

      setPosts(filteredPost);
    } else {
      setPosts(news);
    }
  }, [postCategoryFilter, news]);

  return (
    <Content title="Berita">
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={2}
        p={3}
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <main>
            <Posts cardMaxW={"2xl"} postsData={posts} />
          </main>
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
