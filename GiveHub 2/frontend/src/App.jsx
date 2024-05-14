import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './homePage/Navbar/Navbar';
import Hero from './homePage/Hero/Hero';
import Mission from './homePage/Mission/Mission';
import Donate from './homePage/Donate/Donate';
import Products from './homePage/Products/Products';
import JoinUs from './homePage/JoinUs/JoinUs';
import Contact from './homePage/Contact/Contact';
import SignIn from './Sign-in-up/SignIn/SignIn';
import SignUp from './Sign-in-up/SignUp/SignUp';
import AddProduct from './Donating/AddProduct/AddProduct';
import CartPage from './Buying/CartPage/CartPage';
import ProductsPage from './Buying/ProductsPage/ProductsPage';
import ConfirmationPage from './Buying/CartPage/ConfirmationPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <Hero />
              <Mission />
              <Donate />
              <Products />
              <JoinUs />
              <Contact />
            </div>
          } />
          <Route path="/mission" element={<Mission />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/products" element={<Products />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products-page" element={<ProductsPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
