import React from "react";
import visa from '../assets/images/visa.png'
function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const formattedNumber = "•••• •••• •••• " + number.slice(-4);

  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <img src={visa} alt="" />
      <div className="card-type">{type}</div>
      <div className="card-number">{formattedNumber}</div>
      <div className="card-details">
        <div>
          Expires {expirationMonth}/{expirationYear}
        </div>
        <div>{bank}</div>
      </div>
      <div className="card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;