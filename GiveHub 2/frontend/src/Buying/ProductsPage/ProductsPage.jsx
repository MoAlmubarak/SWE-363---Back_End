import React from 'react';
import './ProductsPage.css';

import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Mock data for the products
const products = [
  {
    id: 1,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },
  {
    id: 2,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 3,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 4,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 5,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 6,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 7,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 8,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 1,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },
  {
    id: 2,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 3,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 4,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 5,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 6,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 7,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 8,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 7,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },{
    id: 8,
    name: 'Green Fancy Chair',
    description: 'Comfortable green chair perfect for modern offices.',
    imageUrl: 'src/assets/images/rectangle51.jpeg' // Replace with actual image path
  },
  // Add more products as needed
];

const ProductsPage = () => {
  const navigate = useNavigate(); // Hook to get the navigate function

  // Function to handle product details button click
  const handleProductDetail = () => {
    navigate('/product-detail'); // Navigate to SignIn route
  };
  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className='product-card'>
          <img src={product.imageUrl} alt={product.name} onClick={handleProductDetail} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {/* <p>{product.price}</p> */}
          <button className='btn'>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
