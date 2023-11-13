import { Wrap, WrapItem } from "@chakra-ui/react";
import Content from "../Content";
import Article from "../Article";

const Articles = () => {
  return (
    <Content title="Artikel">
      <Wrap justify={"center"}>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
      </Wrap>
    </Content>
  );
};

export default Articles;
