import { Stack } from "@chakra-ui/react";
import Navbar from "./NavBar";
import HeaderLogo from "./HeaderLogo";
import HeaderImage from "./HeaderImage";

function Header() {
  return (
    <header>
      <Stack>
        <HeaderLogo />
        <Navbar />
        <HeaderImage />
      </Stack>
    </header>
  );
}

export default Header;
