import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({
  active,
  setActive,
  loan,
  loansAmount,
  setLoanAmount,
  setInvest,
}) => {
  const [inputValue, setInputValue] = useState(null);

  const handleButtonChange = () => {
    setActive(false);
    setLoanAmount(loansAmount - inputValue);
    setInvest(true);
    setInputValue("");
  };

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modal-name">
          <h3>Invest in Loan</h3>
          <p>Loan title you've clicked</p>
        </div>
        <div className="modal-list">
          <p>Amount availiable: {loan.available}</p>
          <p>
            Loan ends in: <span>{loan.annualised_return}</span> days
          </p>
        </div>
        <div className="modal-invest">
          <p>Investment amount</p>
          <div>
            <input
              className="value"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button className="btn-invest" onClick={() => handleButtonChange()}>
              invest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
