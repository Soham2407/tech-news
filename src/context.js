import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  news: [],
  searchQuery: "html",
  page: 0,
  noOfPages: 0,
  isLoading: false,
};

const API = "https://hn.algolia.com/api/v1/search?";

const AppContetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      dispatch({
        type: "GET_NEWS",
        payload: {
          news: data.hits,
          noOfPages: data.nbPages,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData(`${API}query=${state.searchQuery}`);
  }, []);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContetProvider, AppContext, useGlobalContext };
