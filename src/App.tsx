import { Link, Route, Routes } from "react-router";
import { CountryList } from "./components/CountryList/CountryList";
import { CountrySearch } from "./components/CountrySearch";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="main-title">Countries info</h1>
      <div className="">
        <Link to="/">Main</Link>
        <Link to="/all">List</Link>
        <Link to="/search">Search</Link>
      </div>

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
