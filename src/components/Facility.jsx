import SmallContent from "./SmallContent";
import Carousel from "./Carousel";
import FacilityItem from "./FacilityItem";
import classroom from "../assets/facility/kelas.jpg";
import aula from "../assets/facility/aula.jpg";
import parkingArea from "../assets/facility/parkiran.jpg";
import field from "../assets/facility/lapangan.jpg";

function Facility() {
  return (
    <SmallContent>
      <SmallContent.T1 title={"Sarana dan Prasarana"} />
      <div className="min-h-[300px] flex items-center">
        <Carousel width={"300px"} height="200px">
          <FacilityItem
            imgUrl={classroom}
            imgAlt="Ruang Kelas MTs Miftahul Ulum"
            title={"Ruang Kelas"}
            desc="Terdapat 4 kelas di MTs Miftahul Ulum. Dua ruangan untuk kelas VII dan masing-masing satu ruangan untuk kelas VIII dan IX"
          />
          <FacilityItem
            imgUrl={aula}
            imgAlt="Aula (Ruangan Serbaguna) MTs Miftahul Ulum"
            title={"Aula (Ruangan Serbaguna)"}
            desc="Terdapat sebuah ruangan aula di MTs Miftahul Ulum yang biasa digunakan sebagai tampat ibadah maupun aula pertemuan tertentu"
          />
          <FacilityItem
            imgUrl={parkingArea}
            imgAlt="Parkiran Guru MTs Miftahul Ulum"
            title={"Parkir Khusus Guru"}
            desc="Parkiran Khusus Guru MTs Miftahul Ulum"
          />
          <FacilityItem
            imgUrl={field}
            imgAlt="Lapangan MTs Miftahul Ulum"
            title={"Lapangan"}
            desc="Lapangan MTs Miftahul Ulum biasa digunakan untuk upacara maupun siswa bermain sepakbola"
          />
        </Carousel>
      </div>
    </SmallContent>
  );
}

export default Facility;
