import { Link } from "react-router";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.headerBlock}>
      <h1 className={s.headerTitle}>Countries info</h1>

      <div className={s.linkBlock}>
        <Link className={s.link} to="/countries">
          List
        </Link>
        <Link className={s.link} to="/search">
          Search
        </Link>
        <Link className={s.link} to="/continents">
          Continents
        </Link>
      </div>
    </div>
  );
};
