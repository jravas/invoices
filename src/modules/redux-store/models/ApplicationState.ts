import { UserState } from "modules/user";
import { InvoiceState } from "modules/invoices";

export interface ApplicationState {
  user: UserState;
  invoices: InvoiceState;
}
