import { ChangeEvent, useState } from "react";
import { useGetCountryByNameQuery } from "../../Api/countris.api";
import s from "./CountrySearch.module.css";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const CountrySearch = () => {
  const [name, setName] = useState<string>("");
  const [skip, setSkip] = useState(true);

  const { data } = useGetCountryByNameQuery(name, {
    skip: skip,
  });

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setSkip(true);
  };

  const handleSearch = () => {
    setSkip(false);
  };

  const country = data?.data;

  return (
    <div className={s.main}>
      <h2>Country Search</h2>
      <div className={s.searchBlock}>
        <Input value={name} onChange={onChangeName} />
        <Button name={"Search"} onClick={handleSearch} />
      </div>

      {country ? (
        <div>
          <h3>{country.name}</h3>
          <h3>{country.capital}</h3>
          <img src={country.href.flag} alt="" />
          <p>population :{country.population}</p>
        </div>
      ) : (
        <p>No country found or search is inactive</p>
      )}
    </div>
  );
};
