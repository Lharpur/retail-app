import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../redux/Shopping/shopping-actions'

const SingleItem = ({ currentItem, addToCart }) => {
  return (
    <div>
      <img
        src={currentItem.id.image}
        alt={currentItem.id.title}
        className="productImg"
      />
      <div>
        <p>{currentItem.id.title}</p>
        <p>{currentItem.id.artist}</p>
        <p>{currentItem.id.price}</p>
        <p>{currentItem.id.format}</p>
        <p>{currentItem.id.cat}</p>
        <p>{currentItem.id.releaseDate}</p>
        <button onClick={() => addToCart(currentItem.id)}>Add To Cart</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)
