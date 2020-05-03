import { InvoicesActionTypes } from "modules/invoices";
import { ActionUnion, createAction } from "modules/redux-store";
import { Invoice } from "modules/invoices";

export const InvoiceActions = {
  Request: () => createAction(InvoicesActionTypes.Request),

  Success: (invoices: Invoice[]) =>
    createAction(InvoicesActionTypes.Success, invoices),

  Error: (error?: string) => createAction(InvoicesActionTypes.Error, error),
  Reset: () => createAction(InvoicesActionTypes.Reset),
};

export type InvoiceActions = ActionUnion<typeof InvoiceActions>;
