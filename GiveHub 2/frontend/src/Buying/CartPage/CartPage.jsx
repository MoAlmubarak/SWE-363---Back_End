import React from 'react';
import './CartPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
 
// Assuming you have a state or context to manage these in a real app
const cartItems = [
  {
    id: 1,
    name: 'Comfort Chair',
    description: 'A comfortable chair perfect for your office or study.',
    price: 'Free',
    imgSrc: 'src/assets/images/rectangle51.jpeg'
  },
  // More items can be added here
];

const CartPage = () => {
  const navigate = useNavigate(); // Hook to get the navigate function

  // Function to handle sign-in button click
  const handleCheckout = () => {
    navigate('/confirmation'); // Navigate to SignIn route
  };
  // Function to handle removing items from cart
  const handleRemoveItem = (itemId) => {
    console.log(`Remove item with id: ${itemId}`);
    // Add logic to remove item from state/context
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page-container">
      <h3>Your Cart</h3>
      {cartItems.length > 0 ? (
        <ul className='cart-items-list'>
          {cartItems.map(item => (
            <li key={item.id} className='cart-item'>
              <div className='item-image'>
                <img src={item.imgSrc} alt={item.name} />
              </div>
              <div className='item-details'>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                <button className='btn remove-btn' onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className='cart-summary'>
        <h2>Cart Summary</h2>
        <h4>Total price: 0 SAR</h4>
        <button className='btn checkout-btn' onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
