import React from "react";
import { Invoice, Filters } from "components";

const invoices = [
  {
    id: "00",
    name: "Water supply service",
    price: "124,32",
    date: "17.4.2020.",
    status: true,
  },
  {
    id: "01",
    name: "Internet service provider",
    price: "168,27",
    date: "15.4.2020.",
    status: true,
  },
  {
    id: "02",
    name: "Electricity service",
    price: "245,12",
    date: "12.4.2020.",
    status: true,
  },
  {
    id: "03",
    name: "Natural gas",
    price: "224,95",
    date: "12.4.2020.",
    status: true,
  },
  {
    id: "04",
    name: "Netflix",
    price: "80,00",
    date: "10.4.2020.",
    status: true,
  },
  {
    id: "05",
    name: "PlayStation Plus",
    price: "65,00",
    date: "8.4.2020.",
    status: true,
  },
];

export const Invoices = () => {
  return (
    <div className="main">
      <Filters></Filters>
      <div className="invoices invoices--list">
        {invoices.map((i) => (
          <Invoice key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
};
