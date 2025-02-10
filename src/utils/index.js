import { toast } from "react-toastify";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function convertDate(dateString) {
  const [day, month, year] = dateString.split("-").map(Number);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(year, month - 1, day); // Months are zero-based in Date object

  const formattedDate = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  return formattedDate;
}

export function copyURL() {
  const currentURL = window.location.href;
  navigator.clipboard
    .writeText(currentURL)
    .then(() => {
      toast?.success("URL copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy:", error);
      toast?.error("Failed to copy URL to clipboard.");
    });
}
