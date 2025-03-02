import React, { useState } from "react";
import { Card, CardContent } from "./components/card";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { List, ListItem } from "./components/list";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (title && amount) {
      setExpenses([...expenses, { title, amount: parseFloat(amount) }]);
      setTitle("");
      setAmount("");
    }
  };

  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Expense Tracker
          </h2>
          <div className="mb-4">
            <Input
              placeholder="Expense Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              placeholder="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <Button onClick={addExpense}>Add Expense</Button>
          <h3 className="text-lg font-semibold mt-4 text-gray-700">
            Total: <span className="text-green-600">${totalExpense.toFixed(2)}</span>
          </h3>
          <List>
            {expenses.length === 0 ? (
              <p className="text-gray-500 text-center">No expenses added.</p>
            ) : (
              expenses.map((expense, index) => (
                <ListItem key={index}>
                  <span className="font-medium">{expense.title}</span>
                  <span className="text-red-500">${expense.amount.toFixed(2)}</span>
                </ListItem>
              ))
            )}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
