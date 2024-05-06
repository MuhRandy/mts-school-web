import Content from "../Content";
import { SimpleGrid } from "@chakra-ui/react";
import Teacher from "./Teacher";
import { useEffect, useState } from "react";
import LoadingSection from "../LoadingSection";
import { useAppContext } from "../../utils/context";
import { getTeacherData } from "../../utils/utils";

function StaffTeachers() {
  const { state, globalStateAction } = useAppContext();
  const { renderCount, isLoading } = state;
  const { changeIsLoading } = globalStateAction;

  const [teacherData, setTeacherData] = useState<any[]>([]);

  useEffect(() => {
    // get teacher data from firestore
    getTeacherData(changeIsLoading, setTeacherData);
  }, [renderCount]);
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
              imgPath={data.imgPath}
              dataID={data.id}
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
