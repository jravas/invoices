import { Invoice } from "../models";

enum AddActions {
  AddInvoiceRequest = "ADD_INVOICE_REQUEST",
  AddInvoiceSuccess = "ADD_INVOICE_SUCCESS",
  AddInvoiceError = "ADD_INVOICE_ERROR",
}
enum GetActions {
  InvoiceRequest = "INVOICES_REQUEST",
  InvoiceSuccess = "INVOICES_SUCCESS",
  InvoiceError = "INVOICES_ERROR",
}

export const InvoiceActions = {
  AddActions,
  GetActions,
};

export type InvoiceActions = typeof InvoiceActions;

interface InvoiceRequest {
  type: typeof InvoiceActions.GetActions.InvoiceRequest;
}

interface InvoiceSuccess {
  type: typeof InvoiceActions.GetActions.InvoiceSuccess;
  payload: Invoice[];
}

interface InvoiceError {
  type: typeof InvoiceActions.GetActions.InvoiceError;
  payload: string;
}
interface AddInvoiceRequest {
  type: typeof InvoiceActions.AddActions.AddInvoiceRequest;
}
interface AddInvoiceSuccess {
  type: typeof InvoiceActions.AddActions.AddInvoiceSuccess;
  payload: Invoice;
}
interface AddInvoiceError {
  type: typeof InvoiceActions.AddActions.AddInvoiceError;
  payload: string;
}

export type InvoiceActionTypes =
  | AddInvoiceRequest
  | AddInvoiceSuccess
  | AddInvoiceError
  | InvoiceRequest
  | InvoiceSuccess
  | InvoiceError;
// export type InvoiceActionTypes = SendMessageAction | DeleteMessageAction
