import Content from "../components/Content";
import Posts from "../components/News/Posts";
import { useNewsContext } from "../services/state/NewsContext";

export default function Home() {
  const news = useNewsContext();

  return (
    <main>
      <Content title="Berita">
        <Posts postsData={news} />
      </Content>
    </main>
  );
}
