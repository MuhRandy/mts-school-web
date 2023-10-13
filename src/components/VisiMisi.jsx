import SmallContent from "./SmallContent";

function VisiMisi() {
  return (
    <SmallContent>
      <SmallContent.T1 title={"Visi & Misi Sekolah"} />
      <article>
        <SmallContent.T2 title={"Visi"} />
        <SmallContent.P className={"italic font-semibold"}>
          ”Terbentuknya Siswa yang Beriman dan Bertaqwa Kepada Allah Swt.,
          Berilmu Pengetahuan dan Keterampilan Serta Mempunyai Wawasan dan
          Kesadaran Terhadap Diri dan Lingkungan”
        </SmallContent.P>
      </article>
      <article>
        <SmallContent.T2 title={"Misi"} />
        <SmallContent.P>
          Untuk mencapai Visi dimaksud perlu dilakukan suatu Misi berupa
          kegiatan jangka panjang dengan arah yang jelas dan sistematis. <br />
          Berikut Misi MTs. Miftahul Ulum Sungai Tabuk :
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
            Mengoptimalkan proses pembelajaran dan bimbingan secara efektif dan
            efesien.
          </li>
          <li>
            Mengembangkan pengetahuan di bidang IPTEK, Bahasa, Olah Raga dan
            Seni Budaya sesuai dengan bakat, minat dan potensi siswa.
          </li>
        </SmallContent.Ol>
      </article>
    </SmallContent>
  );
}

export default VisiMisi;
