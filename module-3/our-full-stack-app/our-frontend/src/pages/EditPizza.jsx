import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { PizzaContext } from "../contexts/PizzaContext";
const EditPizza = () => {
  const [title, setTitle] = useState("");
  const [toppings, setToppings] = useState("");
  const [size, setSize] = useState("");
  const { pizzaId } = useParams();
  const { pizzas, setPizzas } = useContext(PizzaContext);
  const nav = useNavigate();
  useEffect(() => {
    function getOnePizza() {
      axios
        .get(`${import.meta.env.VITE_API_URL}/pizza/one-pizza/${pizzaId}`)
        .then((res) => {
          console.log("here is one pizza", res.data);
          setTitle(res.data.title);
          setToppings(res.data.toppings);
          setSize(res.data.size);
        })
        .catch((err) => console.log(err));
    }
    getOnePizza();
  }, [pizzaId]);

  function handleUpdatePizza(event) {
    event.preventDefault();
    const updatedPizza = {
      title,
      toppings: toppings.split(","),
      size,
    };
    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/pizza/update-pizza/${pizzaId}`,
        updatedPizza
      )
      .then((res) => {
        const newPizzaArray = pizzas.map((onePizza) => {
          if (onePizza._id === pizzaId) {
            return res.data;
          } else {
            return onePizza;
          }
        });

        console.log("new pizza array", newPizzaArray);
        setPizzas(newPizzaArray);
        nav("/all-pizzas");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h3>Edit Pizza </h3>
      <form onSubmit={handleUpdatePizza}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Toppings: (separate each topping with comma)
          <input
            type="text"
            value={toppings}
            onChange={(e) => setToppings(e.target.value)}
          />
        </label>
        <label>
          Size:
          <select alue={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">--none--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="ragnar-size">Huge</option>
          </select>
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
export default EditPizza;
