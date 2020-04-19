import React, { SFC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppRoute } from "const";

export const Header: SFC = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");
  useEffect(() => {
    getTitle(pathname);
  });

  const getTitle = (pathname: string) => {
    switch (pathname) {
      case AppRoute.Overview:
        setTitle("Overview");
        return;
      case AppRoute.Invoices:
        setTitle("Invoices");
        return;
      case AppRoute.Settings:
        setTitle("Settings");
        return;
      case AppRoute.AddInvoice:
        setTitle("New Invoice");
        return;
      default:
        return;
    }
  };

  return (
    <header className="header">
      <h1 className="header--title t t--alpha s--left--med s--right--med">
        {title}
      </h1>
    </header>
  );
};
