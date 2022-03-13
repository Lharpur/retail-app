import React from 'react'
import AddProduct from '../components/addProduct'
import DeleteProduct from '../components/deleteProduct'
import Collapsible from 'react-collapsible'

const admin = () => {
  return (
    <div className="adminContainer">
      <h1>Admin Functions</h1>
      <Collapsible trigger="Add Product" className="adminCollapse">
        <div className="adminWrapper">
          <AddProduct />
        </div>
      </Collapsible>
      <Collapsible trigger="Delete Product" className="adminCollapse">
        <div className="adminWrapper">
          <DeleteProduct />
        </div>
      </Collapsible>
    </div>
  )
}

export default admin
