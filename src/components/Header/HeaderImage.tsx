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
          "min-[768px]:h-[230px]",
          "min-[992px]:h-[320px]",
        ])}
      />
      <div
        className={clsx(
          "bg-black opacity-70 w-full h-[100px]",
          "absolute top-0",
          "flex items-center justify-center",
          "text-center text-xl font-bold text-white",
          // "mix-blend-multiply",
          [
            "min-[480px]:h-[180px] min-[480px]:text-4xl",
            "min-[768px]:h-[230px] min-[768px]:text-6xl",
            "min-[992px]:h-[320px] min-[992px]:text-7xl",
          ]
        )}
      >
        Selamat Datang di Website Miftahul Ulum
      </div>
    </div>
  );
};

export default HeaderImage;
