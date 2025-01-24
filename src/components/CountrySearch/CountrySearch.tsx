import { ChangeEvent, useState } from "react";
import { useGetCountryByNameQuery } from "../../Api/countris.api";
import s from "./CountrySearch.module.css";

export const CountrySearch = () => {
  const [name, setName] = useState<string>("");
  const [skip, setSkip] = useState(true);

  const { data } = useGetCountryByNameQuery(name, {
    skip: skip,
  });

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    setSkip(false);
  };
  const country = data ? data[0] : null; // Берём только первую страну

  return (
    <div className={s.main}>
      <h2>Country Search</h2>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <button onClick={handleSearch}>+</button>
      </div>

      {country ? (
        <div>
          <h3>{country.name.common}</h3>
          <h3>{country.capital}</h3>
          <img src={country.flags.png} alt="" />
          <p>population :{country.population}</p>
        </div>
      ) : (
        <p>No country found or search is inactive</p>
      )}
    </div>
  );
};
