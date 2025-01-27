import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseURL = "https://restfulcountries.com/api/v1";
export const token = "DbEHUJzmHGlcIdQ1Y5vtRPYBiNGofYqnZbJkNBVe";

export type Country = {
  name: string;
  iso3: string;
  capital: string;
  continent: string;
  population: string;
  size: string;
  href: {
    flag: string;
  };
};

export interface CountryData {
  data: Country;
}

export interface CountriesData {
  data: Country[];
}

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Country"],
  endpoints: (builder) => ({
    getAllCountries: builder.query<CountriesData, void>({
      query: () => "countries",
    }),
    getCountryByName: builder.query<CountryData, string>({
      query: (name) => `countries/${name}`,
    }),
    getCountriesByContinent: builder.query<CountriesData, string>({
      query: (continent) => `countries?continent=${continent}`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryByNameQuery, useGetCountriesByContinentQuery } = countriesApi;
