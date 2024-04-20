export default function Navbar() {
  return (
    <div className="flex">
      <div className="w-4/5 font-semibold text-grey p-4">
        <div className="text-xl text-center">Recently Generated Reports</div>
      </div>
      <div className="w-1/5 bg-gray-100 text-gray-800 p-4">
        <div className="flex flex-rows justify-end gap-2">
          <div>filter</div>
          <div>close</div>
        </div>
      </div>
    </div>
  );
}
