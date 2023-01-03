import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.text} <span>$400</span>
      {new Date().toLocaleDateString()}
      <button className="delete-btn">❌</button>
    </li>
  );
};
