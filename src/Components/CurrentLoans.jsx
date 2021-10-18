import React, { useEffect, useState } from "react";
import LoansList from "./LoansList";

const CurrentLoans = () => {
  const [loans, setLoan] = useState([]);
  const [loansAmount, setLoanAmount] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4200/loans")
      .then((response) => response.json())
      .then((loans) => {
        setLoan(loans);
        setLoanAmount(
          loans
            .map((loan) => parseFloat(loan.amount))
            .reduce((sum, current) => sum + current)
        );
      });
  }, []);

  return (
    <div>
      <h1>Current Loans</h1>
      <LoansList
        loans={loans}
        loansAmount={loansAmount}
        setLoanAmount={setLoanAmount}
      />
      <p className="current">Current amount: {loansAmount} </p>
    </div>
  );
};

export default CurrentLoans;
