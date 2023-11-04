import Teacher from "./Teacher";
import { register } from "swiper/element/bundle";
import muhammadRandy from "../assets/teachers/Randy.jpg";

register();

function Teachers() {
  const teachers = [
    {
      nama: "Muhammad Randy",
      url: muhammadRandy,
      jabatan: "Guru Mata Pelajaran",
    },
  ];

  return (
    <div>
      <swiper-container slides-per-view="2" loop="true" speed="10">
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
        <swiper-slide>
          <Teacher
            nama={teachers[0].nama}
            imgURL={teachers[0].url}
            jabatan={teachers[0].jabatan}
          />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default Teachers;
