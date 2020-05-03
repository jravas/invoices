import {
  InvoiceActions,
  InvoicesActionTypes,
  InvoiceState,
} from "modules/invoices";

const INITIAL_STATE: InvoiceState = {
  invoices: undefined,
  isLoading: false,
  error: undefined,
};

export const invoiceReducer = (
  state: InvoiceState = INITIAL_STATE,
  action: InvoiceActions
): InvoiceState => {
  switch (action.type) {
    case InvoicesActionTypes.Request:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case InvoicesActionTypes.Success:
      return {
        ...state,
        invoices: action.payload,
        isLoading: false,
      };
    case InvoicesActionTypes.Error:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case InvoicesActionTypes.Reset:
      return INITIAL_STATE;
    default:
      return state || INITIAL_STATE;
  }
};
