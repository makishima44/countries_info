import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "../Api/countris.api";

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});
