import { Wrap, WrapItem } from '@chakra-ui/react';
import Content from '../Content';
import ArticleCard from '../ArticleCard';
import { useAppContext } from '../../App';

const Articles = () => {
  const { articles } = useAppContext();

  return (
    <Content title="Artikel">
      <Wrap justify={'center'}>
        {articles?.map((article: any) => (
          <WrapItem key={article.id}>
            <ArticleCard
              title={article.title}
              postText={article.post}
              articleID={article.id}
              type="article"
            />
          </WrapItem>
        ))}
      </Wrap>
    </Content>
  );
};

export default Articles;
