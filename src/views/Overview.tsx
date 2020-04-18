import React from "react";
import { Invoice } from "components";

const invoices = [
  {
    id: "00",
    name: "Water supply service",
    price: "124,32",
    date: "17.4.2020.",
    status: false,
  },
  {
    id: "01",
    name: "Internet service provider",
    price: "168,27",
    date: "15.4.2020.",
    status: false,
  },
  {
    id: "02",
    name: "Electricity service",
    price: "245,12",
    date: "12.4.2020.",
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
          {invoices.map((i) => (
            <Invoice key={i.id} {...i} />
          ))}
        </div>
      </div>
    </>
  );
};
