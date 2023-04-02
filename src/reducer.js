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

    case "PREV_PAGE":
      let pageNum = state.page;
      if (pageNum <= 0) {
        pageNum = 0;
      } else {
        pageNum = pageNum - 1;
      }
      return {
        ...state,
        page: pageNum,
      };

    case "NEXT_PAGE":
      let pageNo = state.page;
      if (pageNo >= state.noOfPages) {
        pageNo = 0;
      } else {
        pageNo = pageNo + 1;
      }
      return {
        ...state,
        page: pageNo,
      };

    default:
      return state;
  }
};

export default reducer;
