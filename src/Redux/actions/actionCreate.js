import {
    FETCH_ITEMS_LOADING,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
  } from "./actionType";
  
  export const fetchItems = () => {
    return async (dispatch) => {
      try {
        // Dispatch a loading action to indicate data fetching has started
        dispatch({ type: FETCH_ITEMS_LOADING });
  
        // Fetch data from the API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
  
        // Dispatch a success action with the fetched data
        dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data });
      } catch (error) {
        // Dispatch an error action if something goes wrong
        dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
      }
    };
  };
  