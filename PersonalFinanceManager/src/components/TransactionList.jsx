import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="list-box">
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions.map(t => (
          <TransactionItem
            key={t.id}
            transaction={t}
            deleteTransaction={deleteTransaction}
          />
        ))
      )}
    </div>
  );
}

export default TransactionList;
