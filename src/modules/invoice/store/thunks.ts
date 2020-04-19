import { Dispatch } from "redux";
// import { Invoice } from "modules/invoice/store/types";
import {
  addInvoice,
  invoiceRequest,
  invoiceSucess,
  invoiceError,
} from "modules/invoice/store/actions";
import cuid from "cuid";
import Firebase from "firebase-store/initial";

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

  const error = await firebase.invoices().doc(id).set(fullInvoice);

  if (error === undefined) {
    dispatch(addInvoice(fullInvoice));
    return;
  }
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

  console.log("doksi jes", docs);

  if (!docs) {
    dispatch(invoiceError("no snapshot"));
  }

  dispatch(invoiceSucess(docs));
};
