import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// get post date from database and turn it to desired format
const toReadableDate = (dateData: any) => {
  const date = dateData.toDate();
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
  const day = days[date?.getDay()];
  const month = months[date?.getMonth()];
  return `${day}, ${date?.getDate()} ${month} ${date?.getFullYear()}`;
};

export function isUserAdmin(email: string | null, uid: string | null) {
  return (
    email === import.meta.env.VITE_ADMIN_EMAIL &&
    uid === import.meta.env.VITE_ADMIN_UID
  );
}

export { cn, toReadableDate };
