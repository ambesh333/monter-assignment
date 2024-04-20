import { Dispatch, SetStateAction } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  setItemsPerPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex justify-center mt-4 border-t border-gray-300">
      <div className="flex flex-row justify-between gap-4 mt-5">
        <div className="flex flex-row ">
          <div className="flex flex-row justify-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center"
            >
              <GrPrevious />
              <span className="ml-2">Prev</span>
            </button>
          </div>

          <div className="flex ml-4 px-3">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <div className="p-1">
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`mx-1 px-3 py-1 border rounded h-10 w-10 ${
                      currentPage === page ? "bg-orange-400" : "bg-white"
                    }`}
                  >
                    {page}
                  </button>
                </div>
              )
            )}
          </div>
          <div className="flex flex-row p-2 items-center">
            <span className="mr-2">Next</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center"
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div className="flex ml-4 justify-center items-center">
          <span className="mr-2">Rows per page</span>

          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="mx-2 px-2 py-1 border rounded bg-white flex items-center"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    </div>
  );
};
