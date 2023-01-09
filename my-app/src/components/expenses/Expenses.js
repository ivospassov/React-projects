import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { Component, useState } from "react";
import ExpensesList from "./ExpensesList";
import ErrorBoundary from "./ErrorBoundary";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <ErrorBoundary>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </ErrorBoundary>
  );
}

export default Expenses;
