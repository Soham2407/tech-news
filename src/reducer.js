const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "GET_NEWS":
      return {
        ...state,
        news: action.payload.news,
        noOfPages: action.payload.noOfPages,
        isLoading: false,
      };

    case "REMOVE_NEWS":
      return {
        ...state,
        news: state.news.filter((item) => item.objectID !== action.payload),
      };

    case "SEARCH_NEWS":
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
