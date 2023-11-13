import depanMts from "../../assets/foto_depan_mts.jpg";
import clsx from "clsx";

const HeaderImage = () => {
  return (
    <div className="relative bottom-7 z-[-1]">
      <img
        src={depanMts}
        alt="Foto Tampak Depan MTs Miftahul Ulum"
        className={clsx("w-full h-[100px]", "object-cover object-center", [
          "min-[480px]:h-[180px]",
        ])}
      />
      <div
        className={clsx(
          "bg-black opacity-50 w-full h-[100px]",
          "absolute top-0",
          "flex items-center justify-center",
          "text-center text-xl font-bold text-white",
          ["min-[480px]:h-[180px] min-[480px]:text-4xl"]
        )}
      >
        Selamat Datang di Website Miftahul Ulum
      </div>
    </div>
  );
};

export default HeaderImage;
