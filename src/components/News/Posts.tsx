import { Wrap, WrapItem } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

type PostsProps = {
  cardMaxW?: string | number;
  postsData: any;
};

const Posts = ({ cardMaxW = "sm", postsData }: PostsProps) => {
  return (
    <Wrap justify={"center"}>
      {postsData?.map((post: any) => (
        <WrapItem key={post.id}>
          <ArticleCard
            cardMaxW={cardMaxW}
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
  );
};

export default Posts;
