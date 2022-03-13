import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { importProducts } from '../redux/Shopping/shopping-actions'
import { CircleLoader } from 'react-spinners'
import axios from 'axios'
import Product from './product'

const Products = ({ products }) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const fetchProducts = async () => {
    const response = await axios
      .get('http://localhost/retail-app/server/ws.php?data_fetch=albumFetch')
      .catch((err) => {
        console.log('error', err)
      })
    dispatch(importProducts(response.data))
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
    fetchProducts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="productSection">
      <h2>Records</h2>
      <p>Browse through our wide variety of products that we have in stock</p>
      {loading ? (
        <div style={style}>
          <CircleLoader color="orange" loading />
        </div>
      ) : (
        <section className="productContainer">
          {products.map((product) => (
            <Product key={product.album_id} product={product} />
          ))}
        </section>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)
