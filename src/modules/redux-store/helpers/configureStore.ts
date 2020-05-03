import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { userReducer } from "modules/user";
import { invoiceReducer } from "modules/invoices";

export const configureStore = () => {
  const rootReducer = {
    user: userReducer,
    invoices: invoiceReducer,
  };

  return process.env.NODE_ENV === "production"
    ? createStore(combineReducers(rootReducer))
    : createStore(combineReducers(rootReducer), {}, composeWithDevTools());
};
