import Articles from "../components/Articles";
import Content from "../components/Content";
import books from "../assets/tumpukan_buku.jpg";

function News() {
  return (
    <div>
      <Content.Heading
        title={"Berita"}
        imgUrl={books}
        imgAlt="Tumpukan Koran"
      />
      <Content>
        <Content.Main>
          <Articles />
        </Content.Main>
        <Content.Aside />
      </Content>
    </div>
  );
}

export default News;
