import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  addToCart,
  addToSession,
  loadCurrentItem,
} from '../redux/Shopping/shopping-actions'
import { Store } from 'react-notifications-component'

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="productWrapper">
      <img className="productImg" src={product.image} alt={product.title} />
      <div className="productInfo">
        <h3>{product.title}</h3>
        <h4>{product.artist}</h4>
        <h4>${product.price}</h4>
      </div>
      <div className="buttonWrapper">
        <Link to={`/product/${product.album_id}`}>
          <button onClick={() => loadCurrentItem(product)}>View Item</button>
        </Link>
        <button
          onClick={() =>
            addToCart(product.album_id) &&
            Store.addNotification({
              title: 'Added To Cart',
              message: '',
              type: 'success',
              insert: 'top',
              container: 'bottom-right',
              animationIn: ['animate__animated', 'animate__fadeIn'],
              animationOut: ['animate__animated', 'animate__fadeOut'],
              dismiss: {
                duration: 3000,
                onScreen: true,
              },
            })
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    addToSession: (id) => dispatch(addToSession(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(Product)
