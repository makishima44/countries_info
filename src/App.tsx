import { Route, Routes } from "react-router";
import { CountryList } from "@pages/CountryList";
import { CountryDetails } from "@pages/CountryDetails";
import { CountriesByContinent } from "@pages/CountriesByContinents";
import { CountrySearch } from "@pages/CountrySearch";
import { Header } from "@layout/Header";

import "./styles/index.css";

function App() {
  return (
    <div className="root">
      <Header />

      <Routes>
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:name" element={<CountryDetails />} />
        <Route path="/search" element={<CountrySearch />} />
        <Route path="/continents" element={<CountriesByContinent />} />
      </Routes>
    </div>
  );
}

export default App;
