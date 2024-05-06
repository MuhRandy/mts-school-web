import Content from "../components/Content";
import Posts from "../components/News/Posts";
import { useAppContext } from "../utils/context";

export default function Home() {
  const { state } = useAppContext();

  const { news } = state;

  return (
    <main>
      <Content title="Berita">
        <Posts postsData={news} />
      </Content>
    </main>
  );
}
