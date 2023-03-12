import News from "./components/News";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Tech News On The Go</h1>
      <Search />
      <Pagination />
      <News />
    </div>
  );
}

export default App;
