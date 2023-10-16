import Content from "../components/Content";
import Facility from "../components/Facility";
import History from "../components/History";
import VisiMisi from "../components/VisiMisi";
import chairs from "../assets/jejeran_kursi.jpg";
import Teachers from "../components/Teachers";

function Profil() {
  return (
    <div>
      <Content.Heading
        title={"Profil Sekolah"}
        imgUrl={chairs}
        imgAlt={"Lorong Kelas"}
      />
      <Content>
        <Content.Main title={"Profil Sekolah"} className="flex flex-col gap-5">
          <History />
          <VisiMisi />
          <Facility />
          <Teachers />
        </Content.Main>
        <Content.Aside />
      </Content>
    </div>
  );
}

export default Profil;
