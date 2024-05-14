import React from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
const Products = () => {
  const navigate = useNavigate(); // Hook to get the navigate function

  // Function to handle sign-in button click
  const handleProductsPage = () => {
    navigate('/products-page'); 
  };
  return (
    <div className='products'>
    <div className='products-text'>
        <div className='products-text-content'>
            <h1>Shop with Purpose</h1>
            <p>Search for what you need with 0 payment.</p>
            <button className='products-button' onClick={handleProductsPage}>Products</button>
        </div>
    </div>
    <div class="large-image"></div>
    <div class="products-images">
        
        <div class="square-image"></div>
        <div class="square-image2"></div>
    </div>
</div>
  )
}

export default Products
