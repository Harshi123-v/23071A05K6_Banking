import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Login from './components/Login';
import Balance from './components/Balance';
import Transfers from './components/Transfers';
import Profile from './components/Profile';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  // users object keyed by account_id, each user has userData and balance
  const [users, setUsers] = useState({});
  const [currentUserId, setCurrentUserId] = useState(null);

  const registerUser = (userData) => {
    setUsers(prevUsers => ({
      ...prevUsers,
      [userData.account_id]: { userData, balance: 1000 } // initial balance 1000
    }));
    setCurrentUserId(userData.account_id);
  };

  const updateBalance = (accountId, newBalance) => {
    setUsers(prevUsers => ({
      ...prevUsers,
      [accountId]: {
        ...prevUsers[accountId],
        balance: newBalance
      }
    }));
  };

  const currentUser = currentUserId ? users[currentUserId] : null;

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content" style={{ paddingBottom: '60px' }}>
          <Routes>
            <Route path="/registration" element={<Registration registerUser={registerUser} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/balance" element={<Balance currentUser={currentUser} />} />
            <Route path="/transfers" element={<Transfers currentUser={currentUser} users={users} updateBalance={updateBalance} />} />
            <Route path="/profile" element={<Profile currentUser={currentUser} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Registration registerUser={registerUser} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
 
