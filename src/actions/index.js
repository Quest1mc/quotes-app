import quotes from "../apis/quotes";
import history from '../history';
import {
    CREATE_QUOTE,
    FETCH_QUOTES,
    FETCH_QUOTE,
    DELETE_QUOTE,
    EDIT_QUOTE
  } from "./types";
export const createQuote = formValues => async (dispatch, getState) => {
   
      const response = await quotes.post('/quotes', {...formValues});
      dispatch({ type: CREATE_QUOTE, payload: response.data });
     history.push('/');
    };
    
    export const fetchQuotes = () => async dispatch => {
      const response = await quotes.get('/quotes');
      dispatch({ type: FETCH_QUOTES, payload: response.data });
    };
    
    export const fetchQuote = id => async dispatch => {
      const response = await quotes.get(`/quotes/${id}`);
      dispatch({ type: FETCH_QUOTE, payload: response.data });
    };
    
    export const editQuote = (id, formValues) => async dispatch => {
        const response = await quotes.patch(`/quotes/${id}`, formValues);
        dispatch({ type: EDIT_QUOTE, payload: response.data });
        history.push('/');
      };
      
    export const deleteQuote = id => async dispatch => {
      await quotes.delete(`/quotes/${id}`);
      dispatch({ type: DELETE_QUOTE, payload: id });
    };
    