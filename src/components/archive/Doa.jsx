import { useState } from "react";
import { useEffect } from "react";
import AsideContent from "./AsideContent";
import SmallContent from "./SmallContent";

function Doa() {
  const [doa, setDoa] = useState([]);
  useEffect(() => {
    const getDoa = async () => {
      try {
        const response = await fetch(
          "https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/v1/random"
        );
        const result = await response.json();
        setDoa(result[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getDoa();
  }, []);

  console.log(doa);
  return (
    <AsideContent>
      <h2 className="font-semibold text-lg">{doa.doa}</h2>
      <p className="my-3">{doa.ayat}</p>
      <p>{doa.artinya}</p>
    </AsideContent>
  );
}

export default Doa;
