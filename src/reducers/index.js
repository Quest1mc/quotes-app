import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import quoteReducer from "./quoteReducer";

export default combineReducers({

  form: formReducer,
  quotes : quoteReducer

});
