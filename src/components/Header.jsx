import logoMts from "../assets/logo-mts.png";

function Header() {
  return (
    <div className="m-[20px] flex items-center gap-2 justify-center sm:justify-start">
      <img
        src={logoMts}
        alt="Logo MTs Miftahul Ulum"
        className="max-w-[90px] md:max-w-[115px] hidden sm:block"
      />
      <div className="flex flex-col items-center sm:items-start">
        <div className="flex items-center">
          <img
            src={logoMts}
            alt="Logo MTs Miftahul Ulum"
            className="max-w-[47px] sm:hidden block"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            MTS MIFTAHUL ULUM
          </h1>
        </div>
        <p className="text-sm text-center sm:text-base md:text-lg">
          Desa Lok Buntar Kecamatan Sungai Tabuk Kabupaten Banjar
        </p>
      </div>
    </div>
  );
}

export default Header;
