import { Route, Routes } from "react-router";
import { CountryList } from "./components/CountryList/CountryList";

import "./App.css";
import { Header } from "./components/Header/Header";
import { CountrySearch } from "./components/CountrySearch/CountrySearch";

function App() {
  return (
    <div className="root">
      <Header />

      <Routes>
        <Route path="/all" element={<CountryList />} />
        <Route path="/search" element={<CountrySearch />} />
      </Routes>
    </div>
  );
}

export default App;
