import { Link } from "react-router";
import { ThemeToggle } from "@ui/ThemeToggle";

import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.headerBlock}>
      <div className={s.titleBlock}>
        <h1 className={s.headerTitle}>Countries info</h1>
        <ThemeToggle />
      </div>

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
