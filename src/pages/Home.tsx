import Article from "../components/Article";
import { Wrap, WrapItem } from "@chakra-ui/react";
import Main from "../components/Main";
import Articles from "../components/NewsAndArticles/Articles";

export default function Home() {
  return (
    <Main>
      <Articles />
    </Main>
  );
}
