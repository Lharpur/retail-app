import React from "react";
import AddProduct from "../components/addProduct";
import UpdateProduct from "../components/updateProduct";
import DeleteProduct from "../components/deleteProduct";
const admin = () => {
  return (
    <div>
      <AddProduct />
      <DeleteProduct />
      <UpdateProduct />
    </div>
  );
};

export default admin;
