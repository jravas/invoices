import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "modules/invoice/store/store";

import { Invoice, Filters } from "components";

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

export const Invoices = () => {
  const dispatch = useDispatch();
  const { invoices, isLoading } = useSelector(
    (state: RootState) => state.invoices
  );
  // const isLoading = useSelector((state: RootState) => state.);

  useEffect(() => {
    // Update the document title using the browser API
    dispatch(getInvoicesThunk());
  }, [dispatch]);
  console.log("invo", invoices, isLoading);

  if (isLoading) {
    console.log("loading");
    return null;
  }
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
