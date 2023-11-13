import SmallContent from "./SmallContent";

function History() {
  return (
    <SmallContent>
      <SmallContent.T1 title={"Sejarah Sekolah"} />
      <SmallContent.P>
        MTs Miftahul Ulum adalah sekolah swasta menengah pertama yang berada di
        Desa Lok Buntar, Kecamatan Sungai Tabuk, Kabupaten Banjar, Provinsi
        Kalimantan Selatan, dimana sekolah ini didirikan pada tahun 1976. Sejak
        saat itu pergantian pimpinan sekolah dapat diurutkan sebagai berikut :
      </SmallContent.P>
      <SmallContent.Ol>
        <li>H. Majedi Hasan (1976 sd. 1978)</li>
        <li>H. Jamhuri (1979 sd. 1986)</li>
        <li>H. Majedi Hasan (1987 sd. 2000)</li>
        <li>Pauji Abdullah A.Md (2000 sd. 2007)</li>
        <li>Abdusani S.pd (2007 sd. Sekarang)</li>
      </SmallContent.Ol>
    </SmallContent>
  );
}

export default History;
