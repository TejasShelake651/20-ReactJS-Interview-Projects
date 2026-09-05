import React from 'react';

function Dashboard({ balance, income, expenses }) {
  return (
    <div className="dashboard">
      <div className="card balance">
        <h3>Total Balance</h3>
        <p>₹{balance}</p>
      </div>
      <div className="card income">
        <h3>Total Income</h3>
        <p>₹{income}</p>
      </div>
      <div className="card expense">
        <h3>Total Expenses</h3>
        <p>₹{expenses}</p>
      </div>
    </div>
  );
}

export default Dashboard;
