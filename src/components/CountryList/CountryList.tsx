import { Link } from "react-router";
import { useGetAllCountriesQuery } from "../../Api/countris.api";
import s from "./CountryList.module.css";

export const CountryList = () => {
  const { data, isLoading, error } = useGetAllCountriesQuery();

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div className={s.error}>Произошла ошибка при загрузке данных.</div>;
  }

  const countries = data?.data;

  return (
    <div className={s.main}>
      <h2>Country List</h2>
      <div className={s.countryList}>
        {isLoading ? (
          <div className={s.loading}>Loading...</div>
        ) : (
          <ul>
            {countries?.map((country) => (
              <li key={country.iso3}>
                <Link className={s.link} to={`/countries/${country.name}`}>
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
