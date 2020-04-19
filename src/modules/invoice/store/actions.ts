import { InvoiceActions, GetInvoicesActions } from "./actionTypes";
import { Invoice } from "./types";

export const addInvoice = (invoice: Invoice) => ({
  type: InvoiceActions.AddInvoice,
  payload: invoice,
});

export const invoiceRequest = () => ({
  type: GetInvoicesActions.InvoiceRequest,
});

export const invoiceSucess = (invoices: Invoice[]) => ({
  type: GetInvoicesActions.InvoiceSucess,
  payload: invoices,
});

export const invoiceError = (error: string) => ({
  type: GetInvoicesActions.InvoiceError,
  payload: error,
});
