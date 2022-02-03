import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { adjustQty, removeFromCart } from '../redux/Shopping/shopping-actions'

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty)

  const onChangeHandler = (event) => {
    setInput(event.target.value)
    adjustQty(item.id, event.target.value)
  }

  const saveToLocal = () => {
    localStorage.setItem(item.id, item.title)
    console.log('Product Saved')
  }

  return (
    <tr className="cartWrapper">
      <td>
        <img className="cartImage" src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
      </td>
      <td>
        <input
          type="number"
          min={1}
          name="cartQty"
          value={input}
          onChange={onChangeHandler}
        />
      </td>
      <td>
        <h4>${item.price}</h4>
      </td>
      <td>
        <AiFillHeart className="saveIcon" onClick={() => saveToLocal(item.id)}>
          Save
        </AiFillHeart>
      </td>
      <td>
        <BsFillTrashFill onClick={() => removeFromCart(item.id)}>
          Remove From Cart
        </BsFillTrashFill>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  }
}

export default connect(null, mapDispatchToProps)(CartItem)
