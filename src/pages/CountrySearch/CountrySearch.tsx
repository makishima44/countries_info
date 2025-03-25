import { ChangeEvent, useState } from "react";
import { useGetAllCountriesQuery, useGetCountryByNameQuery } from "@api/countries";
import { Input } from "@ui/Input";
import { Button } from "@ui/Button";

import s from "./CountrySearch.module.css";

export const CountrySearch = () => {
  const [name, setName] = useState<string>("");
  const [skip, setSkip] = useState(true);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { data: allCountries } = useGetAllCountriesQuery();
  const { data } = useGetCountryByNameQuery(name, {
    skip: skip,
  });

  const country = data?.data;

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    setSkip(true);

    if (value.length > 1 && Array.isArray(allCountries?.data)) {
      const filtered = allCountries.data
        .filter((country) => country.name.toLowerCase().includes(value.toLowerCase()))
        .map((country) => country.name);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    setSkip(false);
    setSuggestions([]);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setName(suggestion);
    setSkip(false);
    setSuggestions([]);
  };

  return (
    <div className={s.main}>
      <h2>Country Search</h2>
      <div className={s.searchBlock}>
        <div className={s.searchBlockInner}>
          <Input value={name} onChange={onChangeName} />
          <Button onClick={handleSearch}>Search</Button>
        </div>

        {suggestions.length > 0 && (
          <ul className={s.suggestions}>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className={s.suggestionItem}
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={s.infoBlock}>
        {country ? (
          <div>
            <p>country name: {country.name}</p>
            <p>capital: {country.capital}</p>
            <p>continent: {country.continent}</p>
            <img className={s.countryImg} src={country.href.flag} alt="" />
            <p>population: {country.population}</p>
            <p>size: {country.size}</p>
          </div>
        ) : (
          <p>No country found or search is inactive</p>
        )}
      </div>
    </div>
  );
};
