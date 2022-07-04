import React from "react";

import "./PrimaryButton.css";

const PrimaryButton = ({ item }) => {
  return (
    <button key={item.id}
      onClick={() => {
        item.logicFunction();
      }}
      className={item.class}
    >
      {item.buttonName}
    </button>
  );
};

export default PrimaryButton;
