import { useGetAllCountriesQuery } from "../../Api/countris.api";
import s from "./CountryList.module.css";

export const CountryList = () => {
  const { data, isLoading } = useGetAllCountriesQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={s.main}>
      <h2>Country List</h2>

      <div className={s.countryList}>
        <ul>
          {data?.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
