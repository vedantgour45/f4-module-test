import {
  FETCH_ITEMS_LOADING,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "../actions/actionType";

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default itemsReducer;
