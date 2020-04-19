import { Dispatch } from "redux";
// import { Invoice } from "modules/invoice/store/types";
import {
  addInvoiceRequest,
  invoiceRequest,
  invoiceSuccess,
  invoiceError,
  addInvoiceSuccess,
} from "modules/invoice/store/actions";
import cuid from "cuid";
import Firebase from "firebase-store/initial";
import { Invoice } from "../models";

interface NamePrice {
  name: string;
  price: number;
}

const firebase = new Firebase();

export const addInvoiceThunk = (invoice: NamePrice) => async (
  dispatch: Dispatch
): Promise<void> => {
  const id = cuid();
  const date = new Date().getTime();

  const fullInvoice = {
    ...invoice,
    id,
    date,
  };

  dispatch(addInvoiceRequest());

  const error = await firebase.invoices().doc(id).set(fullInvoice);

  if (error === undefined) {
    dispatch(addInvoiceSuccess(fullInvoice));
    return;
  }

  console.log("handle invoice adding error", error);
};

export const getInvoicesThunk = () => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(invoiceRequest());

  const snapshot = await firebase.invoices().get();

  if (!snapshot) {
    dispatch(invoiceError("no snapshot"));
  }

  const docs = await snapshot.docs.map((document) => ({
    ...(document.data() as any),
  }));

  const invoices: Invoice[] = docs;

  if (!docs) {
    dispatch(invoiceError("no snapshot"));
  }

  dispatch(invoiceSuccess(invoices));
};
