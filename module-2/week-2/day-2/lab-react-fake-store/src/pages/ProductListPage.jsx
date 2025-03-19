import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("here is the data:", data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((oneItem) => {
        return (
          <Link key={oneItem.id} to={`/product/details/${oneItem.id}`}>
            <div className="item-card">
              <img src={oneItem.image} alt={oneItem.title} />
              <h3>{oneItem.title}</h3>
              <h3>{oneItem.category}</h3>
              <h3>${oneItem.price}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
