import React from 'react'
import { connect } from 'react-redux'

import Product from './product'

const Products = ({ products }) => {
  return (
    <div className="productContainer">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)
