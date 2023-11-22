import { Wrap, WrapItem } from "@chakra-ui/react";
import Content from "../Content";
import ArticleCard from "../ArticleCard";

const News = () => {
  return (
    <Content title="Pengumuman">
      <Wrap justify={"center"}>
        <WrapItem>
          <ArticleCard title="" postText="" articleID="" />
        </WrapItem>
      </Wrap>
    </Content>
  );
};

export default News;
