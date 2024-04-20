import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="flex justify-center mt-4">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span className="mx-4">
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
