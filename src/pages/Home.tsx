import Article from "../components/Article";
import { Wrap, WrapItem } from "@chakra-ui/react";
import Main from "../components/Main";

export default function Home() {
  return (
    <Main>
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
    </Main>
  );
}
