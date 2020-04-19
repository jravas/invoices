import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addInvoiceThunk } from "modules/invoice/store/thunks";

export const AddInvoice = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, price);
    dispatch(addInvoiceThunk({ name, price }));
  };

  return (
    <div className="main s--top--sml">
      <form className="invoice-form" onSubmit={handleSubmit}>
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
        <input
          className="s--left--med s--right--med s--top--sml"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
