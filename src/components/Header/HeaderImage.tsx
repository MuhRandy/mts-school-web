import depanMts from "../../assets/foto_depan_mts.jpg";
import clsx from "clsx";

const HeaderImage = () => {
  return (
    <div
      className="relative bottom-7 z-[-1] overflow-hidden bg-cover bg-center bg-no-repeat p-12 text-center"
      style={{ backgroundImage: `url(${depanMts})`, height: "400px" }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <div
              className={clsx("mb-6 text-xl font-semibold leading-[0]", [
                "min-[480px]:text-3xl min-[480px]:leading-3",
                "min-[768px]:text-5xl",
              ])}
            >
              Selamat Datang di Website
            </div>
            <div
              className={clsx("mb-4 text-3xl font-bold leading-[0]", [
                "min-[480px]:text-5xl min-[480px]:leading-3",
                ,
                "min-[768px]:text-7xl min-[768px]:leading-3",
              ])}
            >
              MTs Miftahul Ulum
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative bottom-7 z-[-1]">
    //   {/* <img
    //     src={depanMts}
    //     alt="Foto Tampak Depan MTs Miftahul Ulum"
    //     className={clsx("w-full h-[80dvh]", "object-cover object-center")}
    //   /> */}
    //   {/* <div
    //     className={clsx(
    //       "bg-black opacity-60 w-full h-[80dvh] p-1",
    //       "absolute top-0",
    //       "flex flex-col items-center justify-center",
    //       "text-center font-bold text-white"
    //       // "mix-blend-multiply",
    //     )}
    //   >
    //     <span className="text-xl">Selamat Datang di Website</span>
    //     <span className="text-4xl">Miftahul Ulum</span>
    //   </div> */}
    //   {/* <!-- Jumbotron --> */}
    //   {/* <!-- Jumbotron --> */}
    // </div>
  );
};

export default HeaderImage;
