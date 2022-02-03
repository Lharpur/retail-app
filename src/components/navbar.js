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
                style={{ color: ' #89C09F', width: '30px', height: '30px' }}
              />
            ) : (
              <FiMenu
                style={{ color: ' #89C09F', width: '30px', height: '30px' }}
              />
            )}
          </button>
        </div>
        <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
          <Link
            activeclassname="activeNavLink"
            to="/product"
            className="mobile-nav-link"
            onClick={() => closeMenu()}
            exact
          >
            Products
          </Link>
          {/* Mobile About Item */}
          <Link
            activeclassname="activeNavLink"
            to="/about"
            className="mobile-nav-link"
            onClick={() => closeMenu()}
            exact
          >
            About
          </Link>
          {/* Mobile Admin Item */}
          <Link
            activeclassname="activeNavLink"
            to="/admin"
            className="mobile-nav-link"
            onClick={() => closeMenu()}
            exact
          >
            Admin
          </Link>
          {/* Mobile Logout Item */}
          <Logout className="mobile-nav-link" />
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
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose
                style={{ color: ' #89C09F', width: '30px', height: '30px' }}
              />
            ) : (
              <FiMenu
                style={{ color: ' #89C09F', width: '30px', height: '30px' }}
              />
            )}
          </button>
        </div>
        <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
          <Link
            activeclassname="activeNavLink"
            to="/product"
            className="mobile-nav-link"
            onClick={() => closeMenu()}
            exact
          >
            Products
          </Link>
          {/* Mobile About Item */}
          <Link
            activeclassname="activeNavLink"
            to="/about"
            className="mobile-nav-link"
            onClick={() => closeMenu()}
            exact
          >
            About
          </Link>
          {/* Mobile Admin Item */}
          <Link
            activeclassname="activeNavLink"
            to="/admin"
            className="mobile-nav-link"
            onClick={() => closeMenu()}
            exact
          >
            Admin
          </Link>
          {/* Mobile Register Item */}
          <Link
            activeclassname="activeNavLink"
            to="/register"
            className="mobile-nav-link"
            onClick={() => closeMenu()}
            exact
          >
            Register
          </Link>
          {/* Mobile Login Item */}
          <Link
            activeclassname="activeNavLink"
            to="/login"
            className="mobile-nav-link"
            onClick={() => closeMenu()}
            exact
          >
            Login
          </Link>
          {/* Mobile Logout Item */}
          <Logout className="mobile-nav-link" />
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
