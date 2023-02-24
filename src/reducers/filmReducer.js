export const filmReducer = (state = { films: [] }, action) => {
  switch (action.type) {
    case "SEARCH_TERM_REQUEST":
      return {
        loading: true,
        films: [],
      };
    case "SEARCH_TERM_SUCCESS":
      return {
        loading: false,
        films: action.payload.Search,
      };
    case "SEARCH_TERM_FAIL":
      return {
        loading: false,
        films: [],
        error: action.payload,
      };
    case "CLEAR_ERRORS":
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const filmDetailsReducer = (state = { film: {} }, action) => {
  switch (action.type) {
    case "FILM_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FILM_DETAILS_SUCCESS":
      return {
        loading: false,
        film: action.payload,
      };
    case "FILM_DETAILS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CLEAR_ERRORS":
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
