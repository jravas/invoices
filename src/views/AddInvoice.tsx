import React, { useState } from "react";
import { useInvoicesServices, ClientInvoice } from "modules/invoices";
import { useUserServices } from "modules/user";

export const AddInvoice = () => {
  const [, { addInvoice }] = useInvoicesServices();
  const [{ userData }] = useUserServices();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [status, setStatus] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userData || !userData.collections) {
      return;
    }
    const date = new Date().getTime();
    const invoice: ClientInvoice = {
      name,
      price,
      date,
      status,
    };
    addInvoice(invoice, userData.collections[0].id);
  };

  return (
    <div className="main s--top--sml">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control s--left--med s--right--med s--top--tny">
          <label>Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="s--top--tny"
            type="text"
            name="name"
          />
        </div>
        <div className="form-control s--left--med s--right--med s--top--tny">
          <label>Price:</label>
          <input
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
            value={price}
            className="s--top--tny"
            type="number"
            name="price"
          />
        </div>

        <div className="form-control s--left--med s--right--med s--top--tny">
          <label>Paid:</label>
          <input
            className="s--top--tny"
            type="checkbox"
            name="status"
            checked={status}
            onChange={() => setStatus(!status)}
          />
        </div>
        <input
          className="s--left--med s--right--med s--top--sml"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
