import "./ExpenseForm.css";
import { useState } from 'react';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value)
  }; 

  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value)
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
  <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={enteredTitle} onChange={changeTitleHandler} />
      </div>
      <div className="new-expense__control">
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" value={enteredAmount} min="0.01" step="0.01" onChange={changeAmountHandler}/>
      </div>
      <div className="new-expense__control">
        <label htmlFor="date">Date</label>
        <input id="date" type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={changeDateHandler}/>
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add expense</button>
    </div>
  </form>);
}

export default ExpenseForm;
