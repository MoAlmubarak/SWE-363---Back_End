import React from 'react';
import './ConfirmationPage.css'; // Ensure the CSS path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ConfirmationPage = () => {
    const navigate = useNavigate(); // Hook to get the navigate function
    const handleHome = () => {
        navigate('/'); // Navigate to SignIn route
      };
  return (
    <div className="confirmation-page">
      <div className="icon-modal-success">
        <img className="vector-5" src="src/assets/confirm.png" alt="Success Icon" />
      </div>
      <h1 className="your-order-has-been-submitted">
        Your order has been submitted!
      </h1>
      <button className='btn' onClick={handleHome}>Back to Home</button>
    </div>
  );
};

export default ConfirmationPage;
