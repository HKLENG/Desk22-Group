import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Your Plan</label>
        <input
          type="date"
          value={props.selected}
          onChange={dropdownChangeHandler}
        ></input>
      </div>
    </div>
  );
};

export default ExpensesFilter;
