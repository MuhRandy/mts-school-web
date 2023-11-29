import { Stack } from "@chakra-ui/react";
import Main from "../components/Main";
import SchoolHistory from "../components/Profil/SchoolHistory";
import VisiMisi from "../components/Profil/VisiMisi";
import StaffTeachers from "../components/Profil/StaffTeachers";

function Profil() {
  return (
    <Main>
      <Stack spacing={5}>
        <SchoolHistory />
        <VisiMisi />
        <StaffTeachers />
      </Stack>
    </Main>
  );
}

export default Profil;
