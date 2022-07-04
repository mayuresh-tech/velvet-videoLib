import React from "react";
import { useData } from "../../context/DataContext/DataContext";

import "./CategoriesBox.css";

const CategoriesBox = () => {
  const { dispatch } = useData();
  return (
    <div className="categories-box">
      <div
        onClick={() => {
          dispatch({ type: "CLEAR_FILTER" });
        }}
        className="category"
        key="0"
      >
        <p>All</p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "LOAD_GAMES" });
        }}
        className="category"
        key="1"
      >
        <p>Games</p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "LOAD_FAMILY" });
        }}
        className="category"
        key="2"
      >
        <p>Family</p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "LOAD_NATURE" });
        }}
        className="category"
        key="3"
      >
        <p>Nature</p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "LOAD_COMEDY" });
        }}
        className="category"
        key="4"
      >
        <p>Comedy</p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "LOAD_SONGS" });
        }}
        className="category"
        key="5"
      >
        <p>Songs</p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "LOAD_FOOD" });
        }}
        className="category"
        key="6"
      >
        <p>Food</p>
      </div>
      <div
        onClick={() => {
          dispatch({ type: "LOAD_MOTIVATIONAL" });
        }}
        className="category"
        key="7"
      >
        <p>Motivational</p>
      </div>
    </div>
  );
};

export default CategoriesBox;
