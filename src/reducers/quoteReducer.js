import _ from 'lodash';
import {
  CREATE_QUOTE,
  FETCH_QUOTE,
  FETCH_QUOTES,
  DELETE_QUOTE,
  EDIT_QUOTE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
            return {...state,..._.mapKeys(action.payload, 'id')};
    case FETCH_QUOTE:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_QUOTE:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_QUOTE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_QUOTE:
        return _.omit(state, action.payload);

    default:
      return state;
  }
};

// export default quoteReducer;
