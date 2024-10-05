import React from 'react';
import './App.css'; 

const StartPage = () => {
  return (
    <div className="container">
      <h1>Welcome to ASLingo!</h1>
      <p>Start your journey towards learning American Sign Language through mastery-based practice. 🧠</p>
      <div className="button-container">
        <a href="/mission" className="btn">Mission Statement</a>
        <a href="/login" className="btn">Login</a>
      </div>
    </div>
  );
};

export default StartPage;
