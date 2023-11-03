import {
  IconArrowNarrowRight,
  IconCalendarStats,
  IconUserCircle,
} from "@tabler/icons-react";
import clsx from "clsx";

function Card({ children, imgUrl }) {
  return (
    <div className="shadow-lg rounded-2xl overflow-hidden">
      <img
        src={imgUrl}
        alt="image of post"
        className="w-full border-b-4 border-lime-500"
      />
      <div className="p-2 sm:p-10">{children}</div>
    </div>
  );
}

function Title({ children }) {
  return (
    <div className="relative">
      <h2
        className={clsx(
          "after:absolute after:bottom-0 after:left-0 after:h-1 after:border-b-4 after:border-black after:w-[10%] hover:after:w-1/5 after:transition-all after:duration-500 after:rounded-md",
          "text-3xl md:text-4xl font-semibold md:font-bold"
        )}
      >
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
      <div
        className={clsx(
          "py-5",
          "flex flex-col",
          "sm:flex-row sm:items-center sm:justify-between"
        )}
      >
        {/* Author */}
        <div className="flex gap-2 items-center">
          <IconUserCircle className="hover:scale-125 transition duration-500" />
          <span className={clsx("text-xs", "md:font-semibold")}>@Admin</span>
        </div>
        {/*  */}

        {/* Date */}
        <div className={clsx("flex items-center gap-1", "text-xs")}>
          <IconCalendarStats stroke={1} />
          <span className="md:font-semibold">
            {day}, {date.getDate()} {month} {date.getFullYear()}
          </span>
        </div>
        {/*  */}
      </div>

      <p
        className={clsx("text-sm", "border-b-2 border-lime-500", "pb-5", [
          "sm:text-base",
          "md:text-lg",
        ])}
      >
        {children}
      </p>

      <button
        className={clsx(
          "bg-lime-500 rounded-full",
          "text-white",
          "py-1 px-3 mt-3",
          "flex gap-1"
        )}
      >
        Lanjut <IconArrowNarrowRight />
      </button>
    </div>
  );
}

Card.Title = Title;
Card.Body = Body;

export default Card;
