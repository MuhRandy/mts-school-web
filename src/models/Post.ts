import { FieldValue } from "firebase/firestore";

export type PostData = {
  title: string;
  post: string;
  postCategory: string;
  imgUrl: string;
  imgPath: string;
  timestamp: FieldValue;
  author: {
    id: string | undefined;
  };
};

export default function Post(data: PostData) {
  return {
    title: data.title,
    post: data.post,
    postCategory: data.postCategory,
    imgUrl: data.imgUrl,
    imgPath: data.imgPath,
    timestamp: data.timestamp,
    author: data.author,
  };
}
