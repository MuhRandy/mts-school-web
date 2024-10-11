import Content from "../Content";
import { SimpleGrid } from "@chakra-ui/react";
import Teacher from "./Teacher";
import { useEffect, useState } from "react";
import LoadingSection from "../LoadingSection";
import { getTeacherData } from "../../services/GetDataService";
import {
  useAppStatusContext,
  useAppStatusDispatchContext,
} from "../../services/state/AppStatusContext";

function StaffTeachers() {
  const { renderCount, isLoading } = useAppStatusContext();
  const dispatch = useAppStatusDispatchContext();

  function changeIsLoading(newIsLoading: boolean) {
    dispatch({
      type: "changed_is_loading",
      isLoading: newIsLoading,
    });
  }

  const [teacherData, setTeacherData] = useState<any[]>([]);

  useEffect(() => {
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
