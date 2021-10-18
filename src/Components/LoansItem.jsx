import React from "react";
import "./LoansItem.css";
import { useState } from "react";
import { Modal } from "./Modal/Modal";

const LoansItem = (props) => {
  const [modalActive, setModalActive] = useState();
  const [invest, setInvest] = useState(false);

  return (
    <ul>
      <li className="list-container">
        <h3>{props.loan.name}</h3>
        <p>{props.loan.title}</p>
        {invest && <p className="checkbox">Invested</p>}
        <button onClick={() => setModalActive(true)}>
          <strong>invest</strong>
        </button>
      </li>
      <Modal
        {...props}
        active={modalActive}
        setActive={setModalActive}
        setInvest={setInvest}
      />
    </ul>
  );
};

export default LoansItem;
