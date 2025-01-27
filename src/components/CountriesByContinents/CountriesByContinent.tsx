import { useState } from "react";
import { useGetCountriesByContinentQuery } from "../../Api/countris.api";

import s from "./CountriesByContinent.module.css";

export const CountriesByContinent = () => {
  const [selectedContinent, setSelectedContinent] = useState<string>("Europe");

  const { data } = useGetCountriesByContinentQuery(selectedContinent);

  const continent = data?.data;
  return (
    <div>
      <div className={s.menuBlock}>
        <h2>Continents</h2>
        <select
          className={s.select}
          id="continents"
          name="continents"
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
        >
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Australia">Australia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>
      </div>

      <div className={s.list}>
        {continent?.map((el) => {
          return (
            <div className={s.country}>
              <span className={s.countryName}>{el.name}</span>
              <span>Capital: {el.capital}</span>
              <img className={s.countryImg} src={el.href.flag} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
