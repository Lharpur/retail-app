import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../redux/Shopping/shopping-actions'

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="productWrapper">
      <img className="productImg" src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="buttonWrapper">
        <Link to={`/product/${product.id}`}>
          <button onClick={() => loadCurrentItem(product)}>View Item</button>
        </Link>
        <button onClick={() => addToCart(product.id)}>Add To Cart</button>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(Product)
