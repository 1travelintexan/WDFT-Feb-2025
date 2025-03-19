import axios from "axios";
import { useEffect, useState } from "react";

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getCart() {
      try {
        const { data } = await axios("https://fakestoreapi.com/carts/6");
        console.log("the cart: ", data);
        const arrayOfProducts = [];
        for (let i = 0; i < data.products.length; i++) {
          const theProductId = data.products[i].productId;
          const theProduct = await axios(
            `https://fakestoreapi.com/products/${theProductId}`
          );
          theProduct.data.quant = data.products[i].quantity;
          arrayOfProducts.push(theProduct.data);
        }
        console.log(
          "here is the array of the actual products: ",
          arrayOfProducts
        );
        setCartProducts(arrayOfProducts);
        let innerTotal = 0;
        arrayOfProducts.forEach((prod) => {
          const sub = prod.price * prod.quant;
          innerTotal += sub;
        });
        setTotal(innerTotal);
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);
  return (
    <div>
      <h1>Our Cart</h1>
      {cartProducts.map((oneCartProduct) => {
        return (
          <div className="cart-item" key={oneCartProduct.id}>
            <img src={oneCartProduct.image} alt={oneCartProduct.title} />
            <h2>{oneCartProduct.title}</h2>

            <h3>Price: {oneCartProduct.price}</h3>
            <h3>Quantity: {oneCartProduct.quant}</h3>
            <h3>SubTotal: {oneCartProduct.price * oneCartProduct.quant}</h3>
          </div>
        );
      })}
      <h2>Grand Total: {total}</h2>
    </div>
  );
};
