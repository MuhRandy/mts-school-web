import { Wrap, WrapItem } from "@chakra-ui/react";
import Content from "../Content";
import ArticleCard from "./ArticleCard";
import { useAppContext } from "../../App";

const Posts = () => {
  const { news } = useAppContext();

  return (
    <Content title="Berita">
      <Wrap justify={"center"}>
        {news?.map((post: any) => (
          <WrapItem key={post.id}>
            <ArticleCard
              title={post.title}
              postText={post.post}
              postID={post.id}
              imgURL={post.imgUrl}
              imgPath={post.imgPath}
              postCategory={post.postCategory}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Content>
  );
};

export default Posts;
