import React, { useState, useEffect } from "react";
import Cart from "../components/cart";

function ProductList() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost/retail-app/server/ws.php?data_fetch=albumFetch")
        .then((response) => response.json())
        .then((result) => {
          setProduct(result);
        });
    };
    fetchData();
  }, []);

  if (!product) return null;

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      {product.map((product, productIndex) => (
        <div key={productIndex} className="productWrapper">
          <h1>{product.title}</h1>
          <p>{product.artist}</p>
          <p>${product.price}</p>
          <button>More Info</button>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
