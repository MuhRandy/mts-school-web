import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Hide,
  IconButton,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../App";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { setIsAuth, isAuth } = useAppContext();

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <>
      <nav
        className={clsx("bg-[#99fc08] mx-5 rounded-md", ["min-[480px]:p-3"])}
      >
        <Hide above="sm">
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon color={"white"} />}
            onClick={onOpen}
            bg={"#99fc08"}
          />
        </Hide>
        <Show above="sm">
          <ul className="flex gap-2 text-white">
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="/profil">Profil</a>
            </li>
            <li>
              <a href="/news">Berita dan Pengumuman</a>
            </li>
            {isAuth && (
              <li>
                <Button colorScheme="blackAlpha" onClick={signUserOut}>
                  Logout
                </Button>
              </li>
            )}
          </ul>
        </Show>
      </nav>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <ul>
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/profil">Profil</a>
              </li>
              <li>
                <a href="/news">Berita dan Pengumuman</a>
              </li>
              {isAuth && (
                <li>
                  <Button colorScheme="blackAlpha" onClick={signUserOut}>
                    Logout
                  </Button>
                </li>
              )}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
