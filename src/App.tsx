import "./App.css";
import { CountryList } from "./components/CountryList";

function App() {
  return (
    <div>
      <h1 className="main">Countries</h1>

      <div>
        <CountryList />
      </div>
    </div>
  );
}

export default App;
