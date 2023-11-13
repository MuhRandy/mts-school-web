import { Divider, VStack } from "@chakra-ui/react";
import Articles from "../components/NewsAndArticles/Articles";
import Main from "../components/Main";
import News from "../components/NewsAndArticles/News";

function NewsAndArticles() {
  return (
    <Main>
      <VStack>
        <News />
        <Divider />
        <Articles />
      </VStack>
    </Main>
  );
}

export default NewsAndArticles;
