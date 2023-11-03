import Teacher from "./Teacher";
import { register } from "swiper/element/bundle";

register();

function Teachers() {
  return (
    <div>
      <swiper-container>
        <swiper-slide>
          <Teacher />
        </swiper-slide>
        <swiper-slide>
          <Teacher />
        </swiper-slide>
        <swiper-slide>
          <Teacher />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default Teachers;
