import { CarouselItem } from "./Carousel";

function FacilityItem({ imgUrl, imgAlt, title, desc }) {
  return (
    <CarouselItem>
      <img
        src={imgUrl}
        alt={imgAlt}
        className="brightness-75 object-cover rounded-2xl"
      />
      <div className="text-white absolute bottom-6 text-center bg-black/40 whitespace-normal rounded-xl p-1 w-[85%]">
        <h3 className="text-base min-[524px]:text-2xl md:text-lg min-[834px]:text-xl min-[920px]:text-2xl font-bold">
          {title}
        </h3>
        <p className="text-xs min-[604px]:text-base md:text-xs min-[834px]:text-sm min-[1030px]:text-base hidden group-hover:block min-[700px]:block min-[768px]:hidden min-[978px]:block">
          {desc}
        </p>
      </div>
    </CarouselItem>
  );
}

export default FacilityItem;
