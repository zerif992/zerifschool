import { FaInbox } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export default function LargeImage() {
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-">
      <img
        src="https://picsum.photos/1600/800"
        alt=""
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
}
