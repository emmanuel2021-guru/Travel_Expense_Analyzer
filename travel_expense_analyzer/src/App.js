import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    date: "",
    amount: "",
    currency: "",
    category: "",
    location: "",
  });

  let expense = [1, 2, 3];

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    // Add expense submission logic here
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <header>
        <h1>Travel Expense Analyzer</h1>
      </header>

      <main>
        <section id="expenses">
          <h2>Add Expenses</h2>
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputName4" class="form-label">
                Name
              </label>
              <input type="text" class="form-control" id="inputName4" />
            </div>
            <div class="col-md-6">
              <label for="inputAmount4" class="form-label">
                Amount
              </label>
              <input type="text" class="form-control" id="inputAmount4" />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary" onClick="return su">
                Add
              </button>
            </div>
          </form>
          <iframe src="http://www.google.com"></iframe>
          <div id="expense-list">{expense}</div>
        </section>

        <section id="visualizations">
          <h2>Expense Visualizations</h2>
          <div id="chart-container">{/* Display charts here */}</div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Travel Expense Analyzer</p>
      </footer>
    </div>
  );
}

export default App;
