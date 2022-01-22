import React from 'react'
import AddProduct from '../components/addProduct'
import UpdateProduct from '../components/updateProduct'
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
      <Collapsible trigger="Update Product" className="adminCollapse">
        <div className="adminWrapper">
          <UpdateProduct />
        </div>
      </Collapsible>
    </div>
  )
}

export default admin
