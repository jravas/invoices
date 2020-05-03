import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInvoicesData,
  InvoiceState,
  InvoicesActionTypes,
  addInvoiceService,
  ClientInvoice,
  getInvoicesService,
} from "modules/invoices";

export type CustomHook<S, A> = () => [S, A];

interface Api {
  resetInvoicesData: VoidFunction;
  addInvoice: (invoice: ClientInvoice, invoiceCollectionId: string) => void;
  getInvoices: (invoiceCollectionId: string) => void;
}

export const useInvoicesServices: CustomHook<InvoiceState, Api> = () => {
  const dispatch = useDispatch();

  const invoices = useSelector(getInvoicesData);

  const addInvoice = React.useCallback(
    async (invoice: ClientInvoice, invoiceCollectionId: string) => {
      // dispatch({ type: InvoicesActionTypes.Request });
      await addInvoiceService(invoice, invoiceCollectionId);
      await getInvoices(invoiceCollectionId);
    },
    [dispatch]
  );

  const getInvoices = React.useCallback(
    async (invoiceCollectionId: string) => {
      dispatch({ type: InvoicesActionTypes.Request });
      const invoices = await getInvoicesService(invoiceCollectionId);
      if (typeof invoices === "string") {
        dispatch({ type: InvoicesActionTypes.Error, payload: invoices });
        return;
      }
      console.log("invoices", invoices);
      dispatch({ type: InvoicesActionTypes.Success, payload: invoices });
    },
    [dispatch]
  );

  const resetInvoicesData = React.useCallback(() => {
    dispatch({ type: InvoicesActionTypes.Reset });
  }, [dispatch]);

  const state = invoices;

  const api = React.useMemo(
    () => ({
      resetInvoicesData,
      addInvoice,
      getInvoices,
    }),
    [resetInvoicesData, addInvoice, getInvoices]
  );

  return [state, api];
};
