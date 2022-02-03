import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from './cartItem.js'

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [check, setCheck] = useState(true)

  function checkboxHandler() {
    setCheck(!check)
  }

  useEffect(() => {
    let items = 0
    let price = 0

    cart.forEach((item) => {
      items += item.qty
      price += item.qty * item.price
    })

    setTotalItems(items)
    setTotalPrice(price)
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Save</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="cartSummaryContainer">
        <hr />
        <div className="priceContainer">
          <span>Cart Total</span>
          <span id="priceSpan">${totalPrice}</span>
        </div>
        <span>Shipping & taxes calculated at checkout</span>
        <div className="termsContainer">
          <input
            type="checkbox"
            className="termsCheck"
            checked={!check}
            onChange={checkboxHandler}
          />
          <label htmlFor="">Agree to Terms and Conditions</label>
        </div>
        <button disabled={check}>Checkout</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Cart)
