import React from "react";


const ExpenseForm = () => {
    const printDetails = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const amount = e.target.amount.value;
        const date = e.target.date.value;

        console.log(title, amount, date)
    }
  return (
    <div>
      <form onSubmit={printDetails}>
        <label>Expense Title</label>
        <input type="text" name="title"></input>
        <label>Expense Amount</label>
        <input type="text" name="amount"></input>
        <label>Expense Date</label>
        <input type="date" name="date"></input>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
