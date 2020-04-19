import {
  InvoiceActionTypes,
  InvoiceActions,
  GetInvoicesActions,
} from "./actionTypes";
import { Invoice } from "./types";

interface State {
  invoices: Invoice[];
  isLoading: boolean;
  error?: string;
}

export const initialState: State = {
  invoices: [],
  isLoading: false,
  error: undefined,
};

export const invoiceReducer = (
  state = initialState,
  action: InvoiceActionTypes
) => {
  switch (action.type) {
    case InvoiceActions.AddInvoice:
      return { ...state, invoices: [...state.invoices, action.payload] };
    case GetInvoicesActions.InvoiceRequest:
      return { ...state, isLoading: true, error: undefined };
    case GetInvoicesActions.InvoiceSucess:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        invoices: [...action.payload],
      };
    case GetInvoicesActions.InvoiceError:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
