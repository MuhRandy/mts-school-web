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
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { cn, isUserAdmin } from "../../utils/utils";
import {
  useAppStatusContext,
  useAppStatusDispatchContext,
} from "../../services/state/AppStatusContext";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isAuth, user } = useAppStatusContext();
  const dispatch = useAppStatusDispatchContext();

  function changeIsAuth(newIsAuth: boolean) {
    dispatch({
      type: "changed_is_auth",
      isAuth: newIsAuth,
    });
  }

  function changeWantToLogin(newWantToLogin: boolean) {
    dispatch({
      type: "changed_want_to_login",
      wantToLogin: newWantToLogin,
    });
  }

  function clearUserData() {
    dispatch({
      type: "clear_user_data",
    });
  }

  const [isSticky, setIsSticky] = useState<boolean>(false);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      changeIsAuth(false);
      clearUserData();
      navigate("/");
      changeWantToLogin(true);
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
          "bg-[#009f5b] mx-5 rounded-md",
          "sticky top-0 transition-all duration-300 z-10",
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
            bg={"#009f5b"}
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
            {(!isAuth || !isUserAdmin(user.email, user.uid)) && (
              <>
                <li>|</li>
                <li>
                  <button onClick={() => changeWantToLogin(true)}>Login</button>
                </li>
              </>
            )}
            {isAuth && isUserAdmin(user.email, user.uid) && (
              <>
                <li>|</li>
                <li>
                  <a href="/create-post">Buat Berita</a>
                </li>
                <li>|</li>
                <li>
                  <a href="/add-teacher">Tambahkan Data Guru</a>
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
              {(!isAuth || !isUserAdmin(user.email, user.uid)) && (
                <li>
                  <button
                    onClick={() => {
                      onClose();
                      changeWantToLogin(true);
                    }}
                  >
                    Login
                  </button>
                </li>
              )}
              {isAuth && isUserAdmin(user.email, user.uid) && (
                <>
                  <li>
                    <a href="/create-post">Buat Berita</a>
                  </li>
                  <li>
                    <a href="/add-teacher">Tambahkan Data Guru</a>
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
