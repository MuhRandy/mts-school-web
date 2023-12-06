import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconBrandGmail } from "@tabler/icons-react";
import { IconHome } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";

function Footer() {
  return (
    // bg-neutral-100 text-neutral-600
    <footer className="bg-lime-100 text-center text-lime-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-3">
      {/* border-neutral-200 */}
      <div className="flex items-center justify-center border-b-2 border-lime-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        {/* className="text-neutral-600 dark:text-neutral-200" */}
        <div className="flex justify-center gap-6 text-lime-600">
          <a href="#!">
            <IconBrandGmail className="h-5 w-5" />
          </a>
          <a href="#!">
            <IconBrandWhatsapp className="h-5 w-5" />
          </a>
          <a href="#!">
            <IconBrandInstagram className="h-5 w-5" />
          </a>
          <a href="#!">
            <IconBrandYoutube className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including two sections (Useful links and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        {/*  grid-1 grid md:grid-cols-2 */}
        <div className="gap-8 flex flex-col justify-evenly md:flex-row">
          {/* <!-- MTs Miftahul Ulum section -->
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              MTs Miftahul Ulum
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div> */}
          {/* <!-- Useful links section --> */}
          {/* text-neutral-600 dark:text-neutral-200 */}
          <div className="text-lime-600">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="/">Beranda</a>
            </p>
            <p className="mb-4">
              <a href="/profil">Profil</a>
            </p>
            <p className="mb-4">
              <a href="/news">Berita</a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <IconHome className="h-6 w-6" />
              Lok Buntar, Sungai Tabuk 70653
            </p>
            <p className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <IconMail className="h-6 w-6" />
              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <IconPhone className="h-6 w-6" />
              +62 8 234 567 88
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      {/* bg-neutral-200 */}
      <div className="bg-[#99fc08] text-white p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: </span>
        {/* text-neutral-600  */}
        <a
          className="font-semibold dark:text-neutral-400"
          href="https://muhrandy.github.io/portofolio-website/"
        >
          Muhammad Randy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
