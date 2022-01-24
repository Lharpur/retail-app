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
      <h3>Cart Summary</h3>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cartSummaryContainer">
        <span>Total: ${totalPrice}</span>
        <button>Checkout</button>
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
