import Content from "../components/Content";
import History from "../components/History";
import VisiMisi from "../components/VisiMisi";
import chairs from "../assets/jejeran_kursi.jpg";
import Teachers from "../components/Teachers";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, left: "-128px" }}
            whileInView={{ opacity: 1, left: 0 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <History />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, left: "-128px" }}
            whileInView={{ opacity: 1, left: 0 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <VisiMisi />
          </motion.div>
          <Teachers />
        </Content.Main>
        <Content.Aside />
      </Content>
    </div>
  );
}

export default Profil;
