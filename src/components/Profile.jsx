import React from 'react';
import './Profile.css';

function Profile({ currentUser }) {
  if (!currentUser) {
    return (
      <div className="profile-container">
        <h2>Profile Page</h2>
        <p>No user data available. Please register first.</p>
      </div>
    );
  }

  const { userData } = currentUser;

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <ul>
        <li><strong>First Name:</strong> {userData.firstName}</li>
        <li><strong>Last Name:</strong> {userData.lastName}</li>
        <li><strong>Email:</strong> {userData.email}</li>
        <li><strong>Phone:</strong> {userData.phone}</li>
        <li><strong>Address:</strong> {userData.address}</li>
        <li><strong>City:</strong> {userData.city}</li>
        <li><strong>Account ID:</strong> {userData.account_id}</li>
      </ul>
    </div>
  );
  
}

export default Profile;
