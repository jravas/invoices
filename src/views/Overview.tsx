import React from "react";
import { Invoice } from "components";

const invoices = [
  {
    name: "Water supply service",
    price: "124,32",
    date: "17.4.2020.",
    status: false,
  },
  {
    name: "Internet service provider",
    price: "168,27",
    date: "15.4.2020.",
    status: false,
  },
  {
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
        <div className="invoices invoices--overview">
          {invoices.map((i) => (
            <Invoice {...i} />
          ))}
        </div>
      </div>
    </>
  );
};
