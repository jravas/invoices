import { FirestoreService } from "modules/firebase";
import { ClientInvoice } from "modules/invoices";

const invoiceCollections = new FirestoreService<ClientInvoice>(
  "invoice-collections"
);

const addInvoiceService = async (
  invoice: ClientInvoice,
  invoiceCollectionId: string
) => {
  return await invoiceCollections.addToSubCollectionAsync(
    invoiceCollectionId,
    "invoices",
    invoice
  );
};

const getInvoicesService = async (invoiceCollectionId: string) => {
  return await invoiceCollections.getSubCollectionAsync(
    invoiceCollectionId,
    "invoices"
  );
};

export { addInvoiceService, getInvoicesService };
