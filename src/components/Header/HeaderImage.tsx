import depanMts from "../../assets/foto_depan_mts.jpg";
import clsx from "clsx";
import Login from "../../pages/Login";
import { useAppContext } from "../../utils/context";

const HeaderImage = () => {
  const { state } = useAppContext();

  const { wantToLogin } = state;

  return (
    <div
      className={clsx(
        "relative bottom-7 h-screen overflow-hidden p-12",
        "bg-cover bg-center bg-no-repeat",
        "text-center"
      )}
      style={{ backgroundImage: `url(${depanMts})` }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden flex flex-col items-center justify-evenly"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="text-white flex flex-col">
          <span
            className={clsx("mb-6 text-xl font-semibold leading-[0]", [
              "min-[480px]:text-3xl min-[480px]:leading-3",
              "min-[768px]:text-5xl",
            ])}
          >
            Selamat Datang di Website
          </span>
          <span
            className={clsx("mb-4 text-3xl font-bold leading-[0]", [
              "min-[480px]:text-5xl min-[480px]:leading-3",
              "min-[768px]:text-7xl min-[768px]:leading-3",
            ])}
          >
            MTs Miftahul Ulum
          </span>
        </div>
        <div className={clsx({ hidden: !wantToLogin })}>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
