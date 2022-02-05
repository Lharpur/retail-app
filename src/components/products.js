import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { importProducts } from '../redux/Shopping/shopping-actions'
import axios from 'axios'
import Product from './product'

const Products = ({ products }) => {
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios
      .get('http://localhost/retail-app/server/ws.php?data_fetch=albumFetch')
      .catch((err) => {
        console.log('error', err)
      })
    dispatch(importProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="productContainer">
      {products.map((product) => (
        <Product key={product.album_id} product={product} />
      ))}
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)
