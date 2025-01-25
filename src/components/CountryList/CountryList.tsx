import { useGetAllCountriesQuery } from "../../Api/countris.api";
import s from "./CountryList.module.css";

export const CountryList = () => {
  const { data, isLoading } = useGetAllCountriesQuery();

  return (
    <div className={s.main}>
      <h2>Country List</h2>

      <div className={s.countryList}>
        {isLoading ? (
          <div className={s.loading}>Loading...</div>
        ) : (
          <ul>
            {data?.map((country) => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
