import { useAppContext } from "../App";
import Content from "../components/Content";
import Main from "../components/Main";
import Posts from "../components/News/Posts";

export default function Home() {
  const { news } = useAppContext();

  return (
    <Main>
      <Content title="Berita">
        <Posts postsData={news} />
      </Content>
    </Main>
  );
}
