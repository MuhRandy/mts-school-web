import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function NavBar() {
  const active = ({ isActive }) => (isActive ? "font-bold" : "");
  const [isClicked, setIsClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 163) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <div
      className={clsx(
        "bg-lime-500",
        "sticky z-10 top-0",
        "mt-[27px]",
        "flex justify-center",
        "font-thin text-white text-lg",
        [
          "sm:text-2xl",
          "md:justify-start md:pl-[114px]",
          "max-[1200px]:h-[55px]",
        ],
        { "mx-[27px] rounded-md": !navbar }
      )}
    >
      <div
        className={
          isClicked
            ? "flex flex-col gap-5 absolute left-0 top-0 z-50 bg-white p-5 text-black"
            : "hidden"
        }
      >
        <IconX
          className="absolute right-[10px] top-0"
          size={30}
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        />
        <NavLink to="/" className={active}>
          Home
        </NavLink>
        <NavLink to="/profil" className={active}>
          Profil Sekolah
        </NavLink>
        <NavLink to="/news" className={active}>
          Berita dan Pengumuman
        </NavLink>
      </div>
      <nav>
        <div
          className={clsx(
            "ml-5",
            "flex items-center gap-2",
            "absolute top-[50%] translate-x-0 translate-y-[-50%] left-0",
            "min-[1201px]:hidden"
          )}
        >
          <IconMenu2
            size={20}
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
        </div>
        <div className="flex gap-5 max-[1200px]:hidden">
          <NavLink to="/" className={active}>
            Home
          </NavLink>
          <NavLink to="/profil" className={active}>
            Profil Sekolah
          </NavLink>
          <NavLink to="/news" className={active}>
            Berita dan Pengumuman
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
