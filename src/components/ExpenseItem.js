import { useState } from "react";

function ExpenseItem() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1)
  }
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
        <button onClick={increase}>Add</button>
        <h1>{number}</h1>
      </div>
    </div>
  );
}

export default ExpenseItem;
