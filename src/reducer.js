const reducer = (state, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        news: action.payload.news,
        noOfPages: action.payload.noOfPages,
      };

    default:
      return state;
  }
};

export default reducer;
