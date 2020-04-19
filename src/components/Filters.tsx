import React, { useState } from "react";
import { Link } from "react-router-dom";

enum ActiveTab {
  All = "all",
  Paid = "paid",
  Unpaid = "unpaid",
}

export const Filters = () => {
  const [activeTab, setActive] = useState(ActiveTab.All);
  return (
    <div className="filters">
      <div className="wrapper f f-center s--left--med s--right--med">
        <span
          onClick={() => setActive(ActiveTab.All)}
          className={`filters--item f t t--gama ${
            activeTab === ActiveTab.All && "filters--item--active"
          }`}
        >
          <span className="filters--item--text">
            <span>All</span>
          </span>
        </span>
        <span
          onClick={() => setActive(ActiveTab.Paid)}
          className={`filters--item f t t--gama ${
            activeTab === ActiveTab.Paid && "filters--item--active"
          }`}
        >
          <span className="filters--item--text">
            <span>Paid</span>
          </span>
        </span>
        <span
          onClick={() => setActive(ActiveTab.Unpaid)}
          className={`filters--item f t t--gama ${
            activeTab === ActiveTab.Unpaid && "filters--item--active"
          }`}
        >
          <span className="filters--item--text">
            <span>Unpaid</span>
          </span>
        </span>
        <Link className="filters--new-invoice" to="/add-invoice">
          +
        </Link>
      </div>
    </div>
  );
};
