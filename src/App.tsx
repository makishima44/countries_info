import { Route, Routes } from "react-router";
import { CountryList } from "./components/CountryList/CountryList";

import "./App.css";
import { Header } from "./components/Header/Header";
import { CountrySearch } from "./components/CountrySearch/CountrySearch";
import { CountryDetails } from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <div className="root">
      <Header />

      <Routes>
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:name" element={<CountryDetails />} />
        <Route path="/search" element={<CountrySearch />} />
      </Routes>
    </div>
  );
}

export default App;
