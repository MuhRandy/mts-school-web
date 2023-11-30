import Content from "../Content";
import { SimpleGrid } from "@chakra-ui/react";
import Teacher from "./Teacher";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useEffect, useState } from "react";
import { useAppContext } from "../../App";
import LoadingSection from "../LoadingSection";

function StaffTeachers() {
  const { renderCount, isLoading, setIsLoading } = useAppContext();

  const [teacherData, setTeacherData] = useState<any[]>([]);
  // get news data from firestore
  // --------

  // database ref
  const teacherDataCollectionRef = collection(db, "teacherData");

  // get the data
  useEffect(() => {
    const getTeacherData = async () => {
      setIsLoading(true);
      const data = await getDocs(teacherDataCollectionRef);
      setTeacherData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };

    getTeacherData();
  }, [renderCount]);
  // --------
  return (
    <Content title="Staff Guru">
      {!isLoading ? (
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          px={{ base: "50px", md: "100px" }}
          gap={10}
        >
          {teacherData?.map((data) => (
            <Teacher
              key={data.id}
              name={data.name}
              jabatan={data.position}
              imgURL={data.imgUrl}
            />
          ))}
        </SimpleGrid>
      ) : (
        <LoadingSection />
      )}
    </Content>
  );
}

export default StaffTeachers;
