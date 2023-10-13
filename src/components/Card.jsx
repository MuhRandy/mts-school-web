import {
  IconArrowNarrowRight,
  IconCalendarStats,
  IconUserCircle,
} from "@tabler/icons-react";

function Card({ children, imgUrl }) {
  return (
    <div className="shadow-lg rounded-2xl overflow-hidden">
      <img
        src="https://placehold.co/200x100"
        alt="image of post"
        className="w-full border-b-4 border-lime-500"
      />
      <div className="p-10">{children}</div>
    </div>
  );
}

function Title({ children }) {
  const line =
    "after:absolute after:bottom-0 after:left-0 after:h-1 after:border-b-4 after:border-black after:w-[10%] hover:after:w-1/5 after:transition-all after:duration-500 after:rounded-md";

  return (
    <div className="relative">
      <h2 className={`${line} text-3xl md:text-4xl font-semibold md:font-bold`}>
        {children}
      </h2>
    </div>
  );
}

function Body({ children }) {
  const date = new Date();

  const days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  return (
    <div>
      <div className="py-5 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <IconUserCircle
            size={35}
            className="hover:scale-125 transition duration-500"
          />
          <span className="md:font-semibold">@Admin</span>
        </div>
        <div className="flex items-center gap-1">
          <IconCalendarStats size={20} stroke={1} />
          <span className="md:font-semibold">
            {day}, {date.getDate()} {month} {date.getFullYear()}
          </span>
        </div>
      </div>
      <p className="text-base md:text-lg border-b-2 border-lime-500 pb-5">
        {children}
      </p>
      <button className="bg-lime-500 text-white py-1 px-3 rounded-full mt-3 flex gap-1">
        Lanjut <IconArrowNarrowRight />
      </button>
    </div>
  );
}

Card.Title = Title;
Card.Body = Body;

export default Card;
