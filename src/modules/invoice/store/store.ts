import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { invoiceReducer } from "./reducers";

const rootReducer = combineReducers({
  invoices: invoiceReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk));
