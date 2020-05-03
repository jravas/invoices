import React from "react";
// import { InvoiceItem } from "components";

const invoices = [
  {
    id: "00",
    name: "Water supply service",
    price: "124.32",
    date: "1587257882301",
    status: false,
  },
  {
    id: "01",
    name: "Internet service provider",
    price: "168.27",
    date: "1587257882301",
    status: false,
  },
  {
    id: "02",
    name: "Electricity service",
    price: "245.12",
    date: "1587257882301",
    status: false,
  },
];

export const Overview = () => {
  return (
    <>
      <div className="graph s--left--med s--right--med s--bottom--med"></div>
      <div className="main">
        <h1 className="overview-title t t--beta">Unpaid</h1>
        <div className="invoices invoices--list">
          {/* {invoices.map((i) => (
            <InvoiceItem key={i.id} {...i} />
          ))} */}
        </div>
      </div>
    </>
  );
};
