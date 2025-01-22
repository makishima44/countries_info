import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseURL = "https://restcountries.com/v3.1/";

export interface Country {
  name: { common: string; official: string };
  capital: string;
  cca3: string;
  population: number;
  flags: {
    png: string;
  };
}

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ["Country"],
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => "all",
    }),

    getCountryByName: builder.query<Country[], string>({
      query: (name) => `name/${name}`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryByNameQuery } = countriesApi;
