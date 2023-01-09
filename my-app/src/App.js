import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";
import React, { useState } from 'react';

const INITIAL_EXPENSES = [
  { id: 'e1', title: "Car insurance", amount: '294.23', date: new Date(2021, 2, 27) },
  { id: 'e2', title: "Groceries", amount: '12.50', date: new Date(2022, 3, 12) },
  { id: 'e3', title: "Playstation 5", amount: '500.00', date: new Date(2021, 7, 24) },
  { id: 'e4', title: "Flight tickets to Egypt", amount: '1300.00', date: new Date(2022, 2, 17),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(previousExpense => {
      return [expense, ...previousExpense];
    });
  };

  return (
    <div>
      <h2 className="welcome-title">Expense documentation</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
