import { FieldValue } from "firebase/firestore";

type TeacherDataType = {
  name: string;
  position: string;
  imgUrl: string;
  imgPath: string;
  timestamp: FieldValue;
  author: {
    id: string | undefined;
  };
};

export default function TeacherData(data: TeacherDataType) {
  return {
    name: data.name,
    position: data.position,
    imgUrl: data.imgUrl,
    imgPath: data.imgPath,
    timestamp: data.timestamp,
    author: data.author,
  };
}
