import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import "./ExpenseData.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const ExpenseData = (props) => {
  const [changedYear, setChangedYear] = useState('2020');

  const selectHandled = (event) => {
    setChangedYear(event.target.value);
  };

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === changedYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedDate={changedYear} onDateSelect={selectHandled} />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default ExpenseData;