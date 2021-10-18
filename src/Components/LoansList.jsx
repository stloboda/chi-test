import React from "react";
import LoansItem from "./LoansItem";
import "./LoansList.css";

const LoansList = (props) => {

  return (
    <div className="container">
      {props.loans.map((loan) => {
        return <LoansItem key={loan.id} loan={loan} {...props}/>;
      })}
    </div>
  );
};

export default LoansList;
