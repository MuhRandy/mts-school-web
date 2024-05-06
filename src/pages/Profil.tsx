import { Stack } from "@chakra-ui/react";
import SchoolHistory from "../components/Profil/SchoolHistory";
import VisiMisi from "../components/Profil/VisiMisi";
import StaffTeachers from "../components/Profil/StaffTeachers";

function Profil() {
  return (
    <main>
      <Stack spacing={5}>
        <SchoolHistory />
        <VisiMisi />
        <StaffTeachers />
      </Stack>
    </main>
  );
}

export default Profil;
