
import { getFilmsRequest } from './../services/request/getRequests';

export const filmAction = (searchTerm) => async (dispatch) => {
  try {
    dispatch({type:'SEARCH_TERM_REQUEST'})
    const {data} = await getFilmsRequest(searchTerm)
    console.log(data)
    dispatch({type:'SEARCH_TERM_SUCCESS', payload: data})
    
} catch (error) {
      dispatch({type:'SEARCH_TERM_FAIL', payload: error})
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
