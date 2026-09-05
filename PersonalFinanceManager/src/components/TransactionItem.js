import React from 'react';

function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <div className="transaction-item">
      <div className="info">
        <div className="title">{transaction.title}</div>
        <div className="type">{transaction.type === 'income' ? 'Income' : 'Expense'}</div>
      </div>
      <div className="right">
        <span className={`amount ${transaction.type}`}>
          {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
        </span>
        <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TransactionItem;
