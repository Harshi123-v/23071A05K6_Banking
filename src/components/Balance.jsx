import React from 'react';
import './Balance.css';

function Balance({ currentUser }) {
  if (!currentUser) {
    return (
      <div className="balance-container">
        <h2>Balance Page</h2>
        <p>Please register or login to view your balance.</p>
      </div>
    );
  }

  const { userData, balance } = currentUser;

  return (
    <div className="balance-container">
      <h2>Balance Page</h2>
      <p><strong>User Name:</strong> {userData.firstName} {userData.lastName}</p>
      <p><strong>Balance:</strong> ${balance.toFixed(2)}</p>
    </div>
  );
}

export default Balance;
