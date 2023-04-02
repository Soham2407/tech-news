import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  news: [],
  searchQuery: "",
  page: 0,
  noOfPages: 0,
  isLoading: false,
};

const API = "https://hn.algolia.com/api/v1/search?";

const AppContetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (api) => {
    dispatch({ type: "SET_LOADING", payload: true });
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
  }, [state.searchQuery]);

  // Delete news
  const removeNewsHandler = (id) => {
    dispatch({ type: "REMOVE_NEWS", payload: id });
  };

  // Search news
  const searchHandler = (searchText) => {
    dispatch({ type: "SEARCH_NEWS", payload: searchText });
  };

  return (
    <AppContext.Provider value={{ ...state, removeNewsHandler, searchHandler }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContetProvider, AppContext, useGlobalContext };
