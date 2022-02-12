import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../pages/logout'
import { connect } from 'react-redux'
// import Hamburger from './hamburgerNav'

//Icon Imports//
import { FaShoppingCart } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

const Navbar = ({ cart }) => {
  // Cart State Management //

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let count = 0
    cart.forEach((item) => {
      count += item.qty
    })
    setCartCount(count)
  }, [cart, cartCount])

  // Hamburger State Menu //

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  if (localStorage.getItem('loggedIn') === 'true') {
    return (
      // Fix Hamburger Menu//
      <nav className="NavBar">
        <div className="NavBarContent">
          {/* Home Icon */}
          <Link to="/" className="navLogo">
            <p>Brand Name</p>
          </Link>

          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cartCount}
          </Link>
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose
                style={{ color: ' #FFFFFF', width: '30px', height: '30px' }}
              />
            ) : (
              <FiMenu
                style={{ color: ' #FFFFFF', width: '30px', height: '30px' }}
              />
            )}
          </button>
        </div>
        <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
          <Link to="/product" onClick={() => closeMenu()}>
            Products
          </Link>
          {/* Mobile About Item */}
          <Link to="/about" onClick={() => closeMenu()}>
            About
          </Link>
          {/* Mobile Admin Item */}
          <Link to="/admin" onClick={() => closeMenu()}>
            Admin
          </Link>
          {/* Mobile Logout Item */}
          <Logout />
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="NavBar">
        <div className="NavBarContent">
          {/* Home Icon */}
          <Link to="/" className="navLogo">
            <p>Brand Name</p>
          </Link>

          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cartCount}
          </Link>
          <button type="button" onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose
                role="button"
                style={{ color: ' #89C09F', width: '30px', height: '30px' }}
              />
            ) : (
              <FiMenu
                role="button"
                style={{ color: ' #89C09F', width: '30px', height: '30px' }}
              />
            )}
          </button>
        </div>
        <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`} role="button">
          <Link to="/product" onClick={() => closeMenu()}>
            Products
          </Link>
          {/* Mobile About Item */}
          <Link to="/about" onClick={() => closeMenu()}>
            About
          </Link>
          {/* Mobile Admin Item */}
          <Link to="/admin" onClick={() => closeMenu()}>
            Admin
          </Link>
          {/* Mobile Register Item */}
          <Link to="/register" onClick={() => closeMenu()}>
            Register
          </Link>
          {/* Mobile Login Item */}
          <Link to="/login" onClick={() => closeMenu()}>
            Login
          </Link>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Navbar)
