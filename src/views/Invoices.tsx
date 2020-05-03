import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { InvoiceItem, Filters } from "components";

import { useInvoicesServices, ClientInvoice } from "modules/invoices";
import { useUserServices } from "modules/user";

enum InvoiceTabs {
  All = "All",
  Paid = "Paid",
  Unpaid = "Unpaid",
}
const tabs = [InvoiceTabs.All, InvoiceTabs.Paid, InvoiceTabs.Unpaid];
const initActive = InvoiceTabs.All;
export const Invoices = () => {
  const [{ userData, isLoading }] = useUserServices();
  const [{ invoices }, { getInvoices }] = useInvoicesServices();

  const tabCallback = (tab: string) => {
    console.log("active tab in parent", tab);
  };

  const renderInvoices = () => {
    if (!invoices) {
      return null;
    }
    return (
      <div className="invoices invoices--list">
        {invoices.map((i) => (
          <InvoiceItem key={i.id} {...i} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (!userData || !userData.collections) {
      return;
    }
    getInvoices(userData.collections[0].id);
  }, [getInvoices, userData]);

  return (
    <div className="main">
      <Filters initActive={initActive} parentCallback={tabCallback} tabs={tabs}>
        <Link className="filters--new-invoice" to="/add-invoice">
          +
        </Link>
      </Filters>
      {renderInvoices()}
    </div>
  );
};
