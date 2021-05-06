import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./index.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Bench Press",
    amount: 6,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "Box Jump", amount: 16, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Air Squat",
    amount: 8,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "Deadlift",
    amount: 8,
    date: new Date(2021, 5, 17)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
