import { Wrap, WrapItem } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import { useAppContext } from "../../App";
import LoadingSection from "../LoadingSection";

type PostsProps = {
  cardMaxW?: string | number;
  postsData: any;
};

const Posts = ({ cardMaxW = "sm", postsData }: PostsProps) => {
  const { isLoading } = useAppContext();
  return (
    <Wrap justify={"center"}>
      {!isLoading ? (
        postsData?.map((post: any) => (
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
        ))
      ) : (
        <LoadingSection />
      )}
    </Wrap>
  );
};

export default Posts;
