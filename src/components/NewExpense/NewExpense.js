import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const [editing, setEditing] = useState(false);
    
    const saveExpenseData = (event) => {
        const expenseData = {
            ...event,
           id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const startEditing = () => {
        setEditing(true);
    }

    const stopEditing = ()  => {
        setEditing(false);
    }
    return <div className="new-expense">
        {!editing && <button onClick={startEditing}>Add New Expense</button>}
        {editing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditing}/>}
    </div>
};

export default NewExpense;
