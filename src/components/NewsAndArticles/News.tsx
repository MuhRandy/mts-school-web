import { Wrap, WrapItem } from '@chakra-ui/react';
import Content from '../Content';
import ArticleCard from '../ArticleCard';
import { useAppContext } from '../../App';

const News = () => {
  const { news } = useAppContext();

  return (
    <Content title="Pengumuman">
      <Wrap justify={'center'}>
        {news?.map((post: any) => (
          <WrapItem key={post.id}>
            <ArticleCard
              title={post.title}
              postText={post.post}
              articleID={post.id}
              type="news"
            />
          </WrapItem>
        ))}
      </Wrap>
    </Content>
  );
};

export default News;
