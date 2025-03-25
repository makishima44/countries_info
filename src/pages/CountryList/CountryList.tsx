import { Link } from "react-router";
import { useGetAllCountriesQuery } from "@api/countries";

import s from "./CountryList.module.css";
import { useMemo, useState } from "react";
import { Pagination } from "@components/ui/Pagination/Pagination";

export const CountryList = () => {
  const { data, isLoading, error } = useGetAllCountriesQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  if (error) {
    console.error("Ошибка при загрузке данных:", error);
    return <div className={s.error}>Произошла ошибка при загрузке данных.</div>;
  }

  const countries = data?.data || [];
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const visibleCountries = useMemo(() => {
    const start = (currentPage - 1) * countriesPerPage;
    return countries.slice(start, start + countriesPerPage);
  }, [countries, currentPage]);

  return (
    <div className={s.main}>
      <h2>Country List</h2>
      <div className={s.countryList}>
        {isLoading ? (
          <div className={s.loading}>Loading...</div>
        ) : (
          <ul>
            {visibleCountries?.map((country) => (
              <li key={country.iso3}>
                <Link className={s.link} to={`/countries/${country.name}`}>
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};
