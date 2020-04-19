import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { invoiceReducer } from "./reducers";
import { authReducer } from "modules/auth/store/reducers";

const rootReducer = combineReducers({
  invoices: invoiceReducer,
  auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk));
