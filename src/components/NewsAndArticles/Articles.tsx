import { Wrap, WrapItem } from "@chakra-ui/react";
import Content from "../Content";
import Article from "../Article";
import { useAppContext } from "../../App";

const Articles = () => {
  const { articles } = useAppContext();

  return (
    <Content title="Artikel">
      <Wrap justify={"center"}>
        {articles?.map((article: any) => (
          <WrapItem key={article.id}>
            <Article title={article.title} postText={article.post} />
          </WrapItem>
        ))}
      </Wrap>
    </Content>
  );
};

export default Articles;
