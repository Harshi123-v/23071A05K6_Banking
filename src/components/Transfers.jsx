import React, { useState } from 'react';
import './Transfers.css';

function Transfers({ currentUser, users, updateBalance }) {
  const [transferData, setTransferData] = useState({
    amountTransferredTo: '',
    amountTransferred: '',
    amountShouldBe: ''
  });

  const handleChange = (e) => {
    setTransferData({...transferData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(transferData.amountTransferred);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid transfer amount.');
      return;
    }
    if (!currentUser) {
      alert('Please register or login to make transfers.');
      return;
    }
    if (amount > currentUser.balance) {
      alert('Insufficient balance.');
      return;
    }
    const recipientId = transferData.amountTransferredTo;
    if (!users[recipientId]) {
      alert('Recipient account ID not found.');
      return;
    }
    // Deduct from sender
    updateBalance(currentUser.userData.account_id, currentUser.balance - amount);
    // Add to recipient
    updateBalance(recipientId, users[recipientId].balance + amount);
    alert(`Transferred $${amount.toFixed(2)} to ${recipientId}`);
    setTransferData({
      amountTransferredTo: '',
      amountTransferred: '',
      amountShouldBe: ''
    });
  };

  if (!currentUser) {
    return (
      <div className="transfers-container">
        <h2>Transfers Page</h2>
        <p>Please register or login to make transfers.</p>
      </div>
    );
  }

  return (
    <div className="transfers-container">
      <h2>Transfers Page</h2>
      <p><strong>User Name:</strong> {currentUser.userData.firstName} {currentUser.userData.lastName}</p>
      <form onSubmit={handleSubmit} className="transfers-form">
        <label>
          Amount Transferred To (Account ID):
          <input
            type="text"
            name="amountTransferredTo"
            value={transferData.amountTransferredTo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Amount Transferred:
          <input
            type="number"
            name="amountTransferred"
            value={transferData.amountTransferred}
            onChange={handleChange}
            required
            min="0.01"
            step="0.01"
          />
        </label>
        <label>
          Amount Should Be:
          <input
            type="number"
            name="amountShouldBe"
            value={transferData.amountShouldBe}
            onChange={handleChange}
            required
            min="0.01"
            step="0.01"
          />
        </label>
        <button type="submit" className="submit-button">Transfer</button>
      </form>
    </div>
  );
}

export default Transfers;
