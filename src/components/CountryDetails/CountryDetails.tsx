import { useParams } from "react-router";
import { useGetCountryByNameQuery } from "../../Api/countris.api";

import s from "./CountryDetails.module.css";

export const CountryDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, error } = useGetCountryByNameQuery(name || "");

  if (isLoading) return <div className={s.loading}>Loading...</div>;
  if (error) return <div>Ошибка при загрузке данных.</div>;

  const country = data?.data;

  return (
    <div className={s.main}>
      <h2>Country Details</h2>

      <div className={s.infoBlock}>
        {country ? (
          <div>
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
            <img className={s.countryImg} src={country.href.flag} alt={`${country.name} flag`} />
            <p>Population: {country.population}</p>
            <p>Continent: {country.continent}</p>
            <p>Size: {country.size}</p>
          </div>
        ) : (
          <p>No details found for this country.</p>
        )}
      </div>
    </div>
  );
};
