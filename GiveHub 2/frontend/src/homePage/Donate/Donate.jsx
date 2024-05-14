import React from 'react'
import './Donate.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


const Donate = () => {
  const navigate = useNavigate(); // Hook to get the navigate function

  // Function to handle sign-in button click
  const handleAddProduct = () => {
    navigate('/add-product'); // Navigate to SignIn route
  };
  return (
    <div className='donate'>
    <div className='donate-text'>
        <div className='donate-text-content'>
            <h1>Your generosity fuels the community.</h1>
            <p>Contribute to our mission by donating unwanted but functional items. Join us in making a difference.</p>
            <button className='donate-button' onClick={handleAddProduct}>Donate</button>
        </div>
    </div>
    <div className='donate-image'></div>
</div>

  )
}

export default Donate

