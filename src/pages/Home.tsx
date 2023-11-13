import Content from "../components/Content";
import depanMts from "../assets/foto_depan_mts.jpg";
import Articles from "../components/Articles";
import clsx from "clsx";

function Home() {
  return (
    <div>
      {/* Foto MTs Depan */}
      <div className="relative bottom-8 z-[-1]">
        <img
          src={depanMts}
          alt="Foto Depan MTs Miftahul Ulum"
          className={clsx("w-full h-[235px]", "object-cover object-center", [
            "min-[405px]:h-[235px]",
            "sm:h-[312px]",
            "md:h-[500px]",
          ])}
        />
        <div
          className={clsx(
            "bg-black opacity-50 h-[235px]",
            "absolute top-0",
            "flex items-center",
            "text-center text-2xl font-bold text-white",
            [
              "min-[402px]:text-3xl",
              "min-[492px]:text-4xl",
              "sm:text-5xl sm:h-[312px]",
              "md:h-[500px] md:text-6xl",
              "lg:text-8xl",
            ]
          )}
        >
          Selamat Datang di Website Miftahul Ulum
        </div>
      </div>
      {/*  */}
      <Content>
        <Content.Main>
          <Articles />
        </Content.Main>
        <Content.Aside noTitle={true} />
      </Content>
    </div>
  );
}

export default Home;
