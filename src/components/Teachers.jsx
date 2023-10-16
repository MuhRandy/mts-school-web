import { IconUserCircle } from "@tabler/icons-react";
import Teacher from "./Teacher";

function Teachers() {
  return (
    <div className="flex justify-center my-10">
      <div className="border-2 border-black overflow-hidden max-w-xs flex justify-center flex-nowrap gap-8">
        <Teacher />
      </div>
    </div>
  );
}

export default Teachers;
