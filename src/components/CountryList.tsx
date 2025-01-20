import { useGetAllCountriesQuery } from "../Api/countris.api";

export const CountryList = () => {
  const { data, isLoading } = useGetAllCountriesQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data?.map((country) => (
        <li key={country.cca3}>{country.name.common}</li>
      ))}
    </ul>
  );
};
