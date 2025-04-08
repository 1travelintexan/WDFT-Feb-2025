import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PizzaContext = createContext();

const PizzaContextWrapper = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const nav = useNavigate();

  //make a useEffect so anytime the page reloads, we verigy the token again
  useEffect(() => {
    getAllPizzas();
  }, []);

  function getAllPizzas() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/pizza/all-pizzas`)
      .then((res) => {
        console.log("all the pizzas", res);
        setPizzas(res.data.allPizzas);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function handleCreatePizza(event, aPizza) {
    event.preventDefault();
    aPizza.toppings = aPizza.toppings.split(",");
    // console.log(event, aPizza);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/pizza/create`,
        aPizza
      );
      console.log("pizza created", data);
      setPizzas([data, ...pizzas]);
      nav("/all-pizzas");
    } catch (error) {
      console.log(error);
    }
  }
  function handleDeletePizza(pizzaId) {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/pizza/delete-pizza/${pizzaId}`)
      .then((res) => {
        console.log("pizza removed from DB", res);
        //update the state on the frontend to reflect the backend
        const filteredPizzas = pizzas.filter((pizza) => {
          if (pizza._id !== pizzaId) {
            return true;
          }
        });
        setPizzas(filteredPizzas);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        handleCreatePizza,
        handleDeletePizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzaContext, PizzaContextWrapper };
