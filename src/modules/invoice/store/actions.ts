import { InvoiceActions } from "./actionTypes";
import { Invoice } from "../models";

/** Add Actions*/
export const addInvoiceRequest = () => ({
  type: InvoiceActions.AddActions.AddInvoiceRequest,
});

export const addInvoiceSuccess = (invoices: Invoice) => ({
  type: InvoiceActions.AddActions.AddInvoiceSuccess,
  payload: invoices,
});

export const addInvoiceError = () => ({
  type: InvoiceActions.AddActions.AddInvoiceError,
});

/** Get Actions */

export const invoiceRequest = () => ({
  type: InvoiceActions.GetActions.InvoiceRequest,
});

export const invoiceSuccess = (invoices: Invoice[]) => ({
  type: InvoiceActions.GetActions.InvoiceSuccess,
  payload: invoices,
});

export const invoiceError = (error: string) => ({
  type: InvoiceActions.GetActions.InvoiceError,
  payload: error,
});
