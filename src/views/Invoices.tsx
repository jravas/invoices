import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "modules/invoice/store/store";

import { Invoice } from "modules/invoice/models/";
import { InvoiceItem, Filters } from "components";

import { useDispatch } from "react-redux";
import { getInvoicesThunk } from "modules/invoice/store/thunks";

// const invoices = [
//   {
//     id: "00",
//     name: "Water supply service",
//     price: "124,32",
//     date: "17.4.2020.",
//     status: true,
//   },
//   {
//     id: "01",
//     name: "Internet service provider",
//     price: "168,27",
//     date: "15.4.2020.",
//     status: true,
//   },
//   {
//     id: "02",
//     name: "Electricity service",
//     price: "245,12",
//     date: "12.4.2020.",
//     status: true,
//   },
//   {
//     id: "03",
//     name: "Natural gas",
//     price: "224,95",
//     date: "12.4.2020.",
//     status: true,
//   },
//   {
//     id: "04",
//     name: "Netflix",
//     price: "80,00",
//     date: "10.4.2020.",
//     status: true,
//   },
//   {
//     id: "05",
//     name: "PlayStation Plus",
//     price: "65,00",
//     date: "8.4.2020.",
//     status: true,
//   },
// ];

enum InvoiceTabs {
  All = "All",
  Paid = "Paid",
  Unpaid = "Unpaid",
}
const tabs = [InvoiceTabs.All, InvoiceTabs.Paid, InvoiceTabs.Unpaid];
const initActive = InvoiceTabs.All;
export const Invoices = () => {
  const dispatch = useDispatch();
  const { invoices, isLoading } = useSelector(
    (state: RootState) => state.invoices
  );

  useEffect(() => {
    dispatch(getInvoicesThunk());
  }, [dispatch]);

  const tabCallback = (tab: string) => {
    console.log("active tab in parent", tab);
  };

  const renderInvoices = (invoices: Invoice[]) => {
    if (isLoading) {
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

  return (
    <div className="main">
      <Filters initActive={initActive} parentCallback={tabCallback} tabs={tabs}>
        <Link className="filters--new-invoice" to="/add-invoice">
          +
        </Link>
      </Filters>
      {renderInvoices(invoices)}
    </div>
  );
};
