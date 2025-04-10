import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
export const AllPizzas = () => {
  const { pizzas, handleDeletePizza } = useContext(PizzaContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile-page">
      <h2>All our Pizzas</h2>
      {pizzas.map((onePizza) => {
        return (
          <div key={onePizza._id} className="pizza-card">
            <img
              src={onePizza.pizzaImage}
              alt={onePizza.title}
              style={{ height: "100px" }}
            />
            <h3>Title: {onePizza.title}</h3>
            <h3>Size: {onePizza.size}</h3>
            <h3>Toppings:</h3>
            <ul>
              {onePizza.toppings.map((oneTopping, index) => {
                return <li key={index}>{oneTopping}</li>;
              })}
            </ul>
            {onePizza.owner._id === currentUser?._id ? (
              <section>
                <Link to={`/edit-pizza/${onePizza._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDeletePizza(onePizza._id)}>
                  Delete
                </button>
              </section>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
