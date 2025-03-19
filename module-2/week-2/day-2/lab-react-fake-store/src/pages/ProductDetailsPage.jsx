import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        //needs to be inside the .then
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>Category: {product.category}</h3>
      <h3>Description: {product.description}</h3>
    </div>
  );
}

export default ProductDetailsPage;
