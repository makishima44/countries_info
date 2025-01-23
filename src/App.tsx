import { Route, Routes } from "react-router";
import { CountryList } from "./components/CountryList/CountryList";
import { CountrySearch } from "./components/CountrySearch";

import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/all" element={<CountryList />} />
          <Route path="/search" element={<CountrySearch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
