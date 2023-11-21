import { Wrap, WrapItem } from '@chakra-ui/react';
import Content from '../Content';
import Article from '../Article';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useEffect, useState } from 'react';

const Articles = () => {
  const postCollectionRef = collection(db, 'posts');

  // type articleProps = {
  //   author: {
  //     id: string;
  //     name: string;
  //   };
  //   id: string;
  //   title: string;
  //   post: string;
  // };

  const [articles, setArticles] = useState<any[] | null[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  console.log(articles);

  return (
    <Content title="Artikel">
      <Wrap justify={'center'}>
        {articles?.map((article) => (
          <WrapItem key={article.id}>
            <Article title={article.title} postText={article.post} />
          </WrapItem>
        ))}
      </Wrap>
    </Content>
  );
};

export default Articles;
