import { CiFilter } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
export default function Navbar() {
  return (
    <div className="flex">
      <div className="w-4/5 font-semibold text-grey p-4">
        <div className="text-xl text-center">Recently Generated Reports</div>
      </div>
      <div className="w-1/5 bg-gray-100 text-gray-800 p-4">
        <div className="flex flex-rows justify-end gap-2 ">
          <CiFilter className="h-8 w-8" />
          <IoCloseOutline className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
