enum GetInvoicesActionTypes {
  Request = "INVOICES_DATA_REQUEST",
  Success = "INVOICES_DATA_SUCCESS",
  Error = "INVOICES_DATA_ERROR",
  Reset = "INVOICES_DATA_RESET",
}

export const InvoicesActionTypes = {
  ...GetInvoicesActionTypes,
};
