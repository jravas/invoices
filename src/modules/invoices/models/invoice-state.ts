import { Invoice } from "./invoice";
export interface InvoiceState {
  isLoading: boolean;
  invoices?: Invoice[];
  error?: string;
}
