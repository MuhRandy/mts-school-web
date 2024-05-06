import { Wrap, WrapItem } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import LoadingSection from "../LoadingSection";
import { useAppContext } from "../../utils/context";

type PostsProps = {
  cardMaxW?: string | number;
  postsData: any;
};

const Posts = ({ cardMaxW = "sm", postsData }: PostsProps) => {
  const { state } = useAppContext();
  const { isLoading } = state;

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
              timestamp={post.timestamp}
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
