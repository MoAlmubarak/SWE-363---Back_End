import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/cart.png';
import { Link as RouterLink } from 'react-router-dom'; // Importing Link from react-router-dom
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Using ScrollLink for in-page links

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="container">
      <RouterLink to="/" onClick={scrollToTop}>
        <img src={logo} alt="Logo" className="logo" />
      </RouterLink>
      <ul className="nav-links">
        <li>
          <RouterLink to="/" className="home-link">
            Home
          </RouterLink>
        </li>
        <li><ScrollLink activeClass="active" to="mission" spy={true} smooth={true} offset={-70} duration={500}>Mission</ScrollLink></li>
        <li><ScrollLink activeClass="active" to="donate" spy={true} smooth={true} offset={-70} duration={500}>Donate</ScrollLink></li>
        <li><ScrollLink activeClass="active" to="products" spy={true} smooth={true} offset={-70} duration={500}>Products</ScrollLink></li>
        <li><ScrollLink activeClass="active" to="joinus" spy={true} smooth={true} offset={-70} duration={500}>Join Us</ScrollLink></li>
        <li><ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Us</ScrollLink></li>
        <li>
          <RouterLink to="/cart">
            <img src={cartIcon} alt="Cart" className="cart-icon" />
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
