import {
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
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../App";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { cn } from "../../utils/utils";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { setIsAuth, isAuth } = useAppContext();
  const [isSticky, setIsSticky] = useState<boolean>(false);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  useEffect(() => {
    window.onscroll = () => {
      if (scrollY >= 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "bg-[#99fc08] mx-5 rounded-md",
          "sticky top-0 transition-all duration-300",
          ["min-[768px]:p-3"],
          {
            "fixed top-0 left-0 right-0 z-50 mx-0 rounded-none": isSticky,
          }
        )}
      >
        <Hide above="md">
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon color={"white"} fontSize={{ sm: "xl" }} />}
            onClick={onOpen}
            bg={"#99fc08"}
          />
        </Hide>
        <Show above="md">
          <ul
            className={clsx("flex gap-2 text-white", [
              "min-[768px]:text-lg",
              "min-[992px]:text-2xl",
            ])}
          >
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>|</li>
            <li>
              <a href="/profil">Profil</a>
            </li>
            <li>|</li>
            <li>
              <a href="/news">Berita</a>
            </li>
            {isAuth && (
              <>
                <li>|</li>
                <li>
                  <a href="/create-post">Buat Berita</a>
                </li>
                <li>|</li>
                <li onClick={signUserOut} className="cursor-pointer">
                  Logout
                </li>
              </>
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
                <a href="/news">Berita</a>
              </li>
              {isAuth && (
                <>
                  <li>
                    <a href="/create-post">Buat Berita</a>
                  </li>
                  <li onClick={signUserOut} className="cursor-pointer">
                    Logout
                  </li>
                </>
              )}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
