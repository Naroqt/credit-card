import React from "react";

function Creditcard() {
  return (
    <div className="credit-body">
      <h1 className="credit-title">CREDIT CARD</h1>
      <img
        className="first-pic"
        src="https://img.icons8.com/plasticine/2x/sim-card-chip.png"
      />
      <p className="code">000000000000</p>
      <div className="expiration">
        <p className="">5422</p>
        <p className="valid">VALID THRU</p>
        <div>
          <p className="">MONTH/YEAR</p>
          <p className="">11/50</p>
        </div>
      </div>
      <p className="holder">CARDHOLDER</p>
      <img
        className="second-pic"
        src="https://www.freeiconspng.com/uploads/master-card-icon-5.jpg"
      />
    </div>
  );
}

export default Creditcard;
