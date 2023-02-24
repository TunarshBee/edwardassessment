
import { getFilmDetails, getFilmsRequest } from './../services/request/getRequests';

export const filmAction = (searchTerm) => async (dispatch) => {
  try {
    dispatch({type:'SEARCH_TERM_REQUEST'})
    const {data} = await getFilmsRequest(searchTerm)
    dispatch({type:'SEARCH_TERM_SUCCESS', payload: data})
    
} catch (error) {
      dispatch({type:'SEARCH_TERM_FAIL', payload: error})
  }
};

export const filmDetailsAction = (searchTerm) => async (dispatch) => {
  try {
    dispatch({type:'FILM_DETAILS_REQUEST'})
    const {data} = await getFilmDetails(searchTerm)
    dispatch({type:'FILM_DETAILS_SUCCESS', payload: data})
    
} catch (error) {
      dispatch({type:'FILM_DETAILS_FAIL', payload: error})
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
