import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../pages/logout'
import { connect } from 'react-redux'

//Icon Imports//
import { FaRecordVinyl, FaCog, FaShoppingCart } from 'react-icons/fa'
import { FiLogOut, FiLogIn } from 'react-icons/fi'
import { AiFillInfoCircle, AiFillHome } from 'react-icons/ai'
import { MdAppRegistration } from 'react-icons/md'

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let count = 0
    cart.forEach((item) => {
      count += item.qty
    })
    setCartCount(count)
  }, [cart, cartCount])

  return (
    <div className="nav-bar">
      <img src={require('../images/logo.png')} alt="" />
      {/* Home Icon */}

      <Link to="/" className="nav-link">
        Home
      </Link>

      <Link to="/">
        <AiFillHome className="nav-icon" />
      </Link>

      {/* Product Icon */}
      <Link to="/product" className="nav-link">
        Products
      </Link>

      <Link to="/product">
        <FaRecordVinyl className="nav-icon" />
      </Link>

      {/* About Icon */}

      <Link to="/about" className="nav-link">
        About
      </Link>

      <Link to="/about">
        <AiFillInfoCircle className="nav-icon" />
      </Link>

      {/* Admin Icon */}

      <Link to="/admin" className="nav-link">
        Admin
      </Link>

      <Link to="/admin">
        <FaCog className="nav-icon" />
      </Link>

      {/* Register Icon */}

      <Link to="/register" className="nav-link">
        Register
      </Link>

      <Link to="/register">
        <MdAppRegistration className="nav-icon" />
      </Link>

      {/* Cart Icon */}

      <Link to="/cart" className="cart-icon">
        <FaShoppingCart />
        {cartCount}
      </Link>

      {/* Login Icon */}

      <Link to="/login" className="nav-link">
        Login
      </Link>

      <Link to="/login">
        <FiLogIn className="nav-icon" />
      </Link>

      {/* Logout Icon */}
      <Logout />

      <Link to="/" className="nav-link">
        <FiLogOut className="nav-icon" />
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Navbar)
