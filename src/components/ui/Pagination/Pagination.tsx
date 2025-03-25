import { Button } from "../Button";
import s from "./Pagination.module.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className={s.paginationBlock}>
      <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Back
      </Button>

      <span className={s.paginationPage}>
        {currentPage} of {totalPages}
      </span>

      <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
};
