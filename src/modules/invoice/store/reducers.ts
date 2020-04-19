import { InvoiceActionTypes, InvoiceActions } from "./actionTypes";
import { Invoice } from "../models";

interface State {
  invoices: Invoice[];
  isLoading: boolean;
  isAdding: boolean;
  error?: string;
}

export const initialState: State = {
  invoices: [],
  isLoading: false,
  isAdding: false,
  error: undefined,
};

export const invoiceReducer = (
  state = initialState,
  action: InvoiceActionTypes
) => {
  switch (action.type) {
    case InvoiceActions.AddActions.AddInvoiceRequest:
      return { ...state, isAdding: true, error: undefined };
    case InvoiceActions.AddActions.AddInvoiceSuccess:
      return {
        ...state,
        isAdding: false,
        error: undefined,
        invoices: [...state.invoices, action.payload],
      };
    case InvoiceActions.AddActions.AddInvoiceError:
      return { ...state, isAdding: false, error: action.payload };
    // case InvoiceActions.AddInvoice:
    //   return { ...state, invoices: [...state.invoices, action.payload] };
    case InvoiceActions.GetActions.InvoiceRequest:
      return { ...state, isLoading: true, error: undefined };
    case InvoiceActions.GetActions.InvoiceSuccess:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        invoices: [...action.payload],
      };
    case InvoiceActions.GetActions.InvoiceError:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
