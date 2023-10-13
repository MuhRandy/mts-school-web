import Content from "../components/Content";
import depanMts from "../assets/foto_depan_mts.jpg";
import History from "../components/History";
import VisiMisi from "../components/VisiMisi";
import SmallContent from "../components/SmallContent";
import Teachers from "../components/Teachers";

function Home() {
  return (
    <div>
      <div className="relative bottom-8 z-[-1]">
        <img
          src={depanMts}
          alt="Foto Depan MTs Miftahul Ulum"
          className="w-full h-[235px] min-[405px]:h-[235px] sm:h-[312px] md:h-[500px] object-cover object-center"
        />
        <div className="text-center text-2xl min-[402px]:text-3xl min-[492px]:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold absolute top-0 bg-black opacity-50 text-white h-[235px] sm:h-[312px] md:h-[500px] flex items-center">
          Selamat Datang di Website Miftahul Ulum
        </div>
      </div>
      <Content>
        <Content.Main>
          <SmallContent.P>
            MTs Miftahul Ulum merupakan sekolah swasta menengah pertama yang
            berada di Desa Lok Buntar, Kecamatan Sungai Tabuk, Kabupaten Banjar,
            Provinsi Kalimantan Selatan, dimana sekolah ini didirikan pada tahun
            1976. Sejak saat itu pergantian pimpinan sekolah dapat diurutkan
            sebagai berikut :
          </SmallContent.P>
          <SmallContent.Ol>
            <li>H. Majedi Hasan (1976 sd. 1978)</li>
            <li>H. Jamhuri (1979 sd. 1986)</li>
            <li>H. Majedi Hasan (1987 sd. 2000)</li>
            <li>Pauji Abdullah A.Md (2000 sd. 2007)</li>
            <li>Abdusani S.pd (2007 sd. Sekarang)</li>
          </SmallContent.Ol>
          <SmallContent.P>
            Mts Miftahul Ulum memiliki visi{" "}
            <span className={"italic"}>
              ”Membentuk Siswa yang Beriman dan Bertaqwa Kepada Allah Swt.,
              Berilmu Pengetahuan dan Keterampilan Serta Mempunyai Wawasan dan
              Kesadaran Terhadap Diri dan Lingkungan”
            </span>{" "}
            dan misi sebagai berikut:
          </SmallContent.P>
          <SmallContent.Ol>
            <li>
              Menanamkan keyakinan / Aqidah agama melalui :
              <ul className="list-disc ml-5">
                <li>Pendidikan Ilmu Tauhid</li>
                <li>
                  Pendidikan dan Bimbingan Ibadah Salat (Salat Wajib dan Sunnah)
                </li>
                <li>Pendidikan Al Qur’an dan Maulidurrasul</li>
              </ul>
            </li>
            <li>
              Mengoptimalkan proses pembelajaran dan bimbingan secara efektif
              dan efesien.
            </li>
            <li>
              Mengembangkan pengetahuan di bidang IPTEK, Bahasa, Olah Raga dan
              Seni Budaya sesuai dengan bakat, minat dan potensi siswa.
            </li>
          </SmallContent.Ol>
        </Content.Main>
        <Content.Aside noTitle={true} />
      </Content>
    </div>
  );
}

export default Home;
