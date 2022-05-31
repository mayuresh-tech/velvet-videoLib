import React from "react";

import "./PrimaryButton.css";

const PrimaryButton = ({ item }) => {
  return (
    <>
      <button class={item.class}>{item.buttonName}</button>
    </>
  );
};

export default PrimaryButton;