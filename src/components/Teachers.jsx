import Teacher from "./Teacher";
import { register } from "swiper/element/bundle";
import { teachers } from "../utils/utils";

register();

function Teachers() {
  return (
    <div>
      <swiper-container slides-per-view="2" loop="true" speed="10">
        {teachers.map((teacher, index) => (
          <swiper-slide key={index}>
            <Teacher
              name={teacher.nama}
              imgURL={teacher.url}
              jabatan={teacher.jabatan}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default Teachers;
