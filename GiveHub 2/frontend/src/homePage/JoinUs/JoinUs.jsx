import React from 'react';
import './JoinUs.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const JoinUs = () => {
  const navigate = useNavigate(); // Hook to get the navigate function

  // Function to handle sign-in button click
  const handleSignIn = () => {
    navigate('/sign-in'); // Navigate to SignIn route
  };

  // Function to handle sign-up button click (if needed)
  const handleSignUp = () => {
    navigate('/sign-up'); // Navigate to SignUp route
  };

  return (
    <div className='joinus'>
      <div className="joinus-text">
        <h1>Join our item exchange community</h1>
        <p>Connect with donors and access essential items at no cost</p>
      </div>
      <div className="joinus-buttons">
        <button className="button1" onClick={handleSignIn}>Sign in</button>
        <button className="button2" onClick={handleSignUp}>Sign up</button>
      </div>
    </div>
  );
}

export default JoinUs;
