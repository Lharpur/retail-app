import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from './cartItem.js'

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

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
    <div className="cartContainer">
      <div className="cartWrapper">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h4>Cart Summary</h4>
      <div className="cartSummaryContainer">
        <div></div>
        <div>
          <span>Total: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
          <button>Checkout</button>
        </div>
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
