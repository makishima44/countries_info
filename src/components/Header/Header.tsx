import { Link } from "react-router";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.headerBlock}>
      <h1 className={s.headerTitle}>Countries info</h1>

      <div className={s.linkBlock}>
        <button>
          <Link to="/all">List</Link>
        </button>
        <button>
          <Link to="/search">Search</Link>
        </button>
      </div>
    </div>
  );
};
