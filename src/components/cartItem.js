import React, { useState } from 'react'
import { connect } from 'react-redux'

import { adjustQty, removeFromCart } from '../redux/Shopping/shopping-actions'

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty)

  const onChangeHandler = (event) => {
    setInput(event.target.value)
    adjustQty(item.id, event.target.value)
  }

  return (
    <div className="cartWrapper">
      <img className="cartImage" src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p>Description: {item.description}</p>
      <p>${item.price}</p>
      <div>
        <label htmlFor="qty">Qty</label>
        <input
          type="number"
          min={1}
          name="cartQty"
          value={input}
          onChange={onChangeHandler}
        />
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  }
}

export default connect(null, mapDispatchToProps)(CartItem)
