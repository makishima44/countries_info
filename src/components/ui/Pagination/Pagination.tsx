type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Back
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
