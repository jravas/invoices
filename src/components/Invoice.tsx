import React, { SFC } from "react";

interface Props {
  name: string;
  price: number;
  date: number;
}

export const Invoice: SFC<Props> = ({ name, price, date }) => {
  const status = true;
  return (
    <div
      className={`invoice s--left--med s--right--med s--top--tny s--bottom--tny ${
        status ? "invoice--active" : "invoice--inactive"
      }`}
    >
      <div className="invoice--header">
        <p className="invoice--header--title">{name}</p>
      </div>
      <div className="invoice--footer s--top--tny">
        <p>{price} HRK</p>
        <p className="t--light">{date}</p>
      </div>
    </div>
  );
};
