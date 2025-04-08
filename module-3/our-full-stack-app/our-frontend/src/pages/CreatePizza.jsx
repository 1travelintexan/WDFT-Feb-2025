import { useContext, useState } from "react";
import { PizzaContext } from "../contexts/PizzaContext";
import { AuthContext } from "../contexts/AuthContext";

export const CreatePizza = () => {
  const [title, setTitle] = useState("");
  const [toppings, setToppings] = useState("");
  const [size, setSize] = useState("");
  const { handleCreatePizza } = useContext(PizzaContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <h2>Create a Pizza</h2>
      <form
        onSubmit={(event) => {
          handleCreatePizza(event, {
            title,
            toppings,
            size,
            owner: currentUser._id,
          });
        }}
      >
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
        <button>Create</button>
      </form>
    </div>
  );
};
