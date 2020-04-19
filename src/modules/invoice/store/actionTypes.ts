import { Invoice } from "./types";

export enum InvoiceActions {
  AddInvoice = "ADD_INVOICE",
}

export enum GetInvoicesActions {
  InvoiceRequest = "INVOICES_REQUEST",
  InvoiceSucess = "INVOICEs_SUCESS",
  InvoiceError = "INVOICEs_ERROR",
}

interface InvoiceRequest {
  type: typeof GetInvoicesActions.InvoiceRequest;
}

interface InvoiceSucess {
  type: typeof GetInvoicesActions.InvoiceSucess;
  payload: Invoice[];
}

interface InvoiceError {
  type: typeof GetInvoicesActions.InvoiceError;
  payload: string;
}

interface AddInvoiceAction {
  type: typeof InvoiceActions.AddInvoice;
  payload: Invoice;
}

export type InvoiceActionTypes =
  | AddInvoiceAction
  | InvoiceRequest
  | InvoiceSucess
  | InvoiceError;
// export type InvoiceActionTypes = SendMessageAction | DeleteMessageAction
