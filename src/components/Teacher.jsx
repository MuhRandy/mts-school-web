import { IconUserCircle } from "@tabler/icons-react";
import mrandyProfil from "../assets/teachers/Muhammad_Randy.jpg";

function Teacher() {
  return (
    <div className="flex flex-col items-center border-2 border-lime-500 min-w-[7rem] text-center text-sm">
      <img
        src={mrandyProfil}
        alt="Muhammad Randy"
        className="h-[100px] w-full object-cover object-center"
      />
      <h1 className="font-semibold">Muhammad Randy</h1>
      <p>Guru Matematika (Kelas VII)</p>
    </div>
  );
}

export default Teacher;
