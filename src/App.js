import { useGlobalContext } from "./context";
import { CircularProgress } from "@mui/material";
import News from "./components/News";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./App.css";

function App() {
  const { isLoading } = useGlobalContext();
  return (
    <div className="App">
      <h1>Tech News On The Go</h1>
      <Search />
      <Pagination />
      {isLoading ? <CircularProgress /> : <News />}
    </div>
  );
}

export default App;
