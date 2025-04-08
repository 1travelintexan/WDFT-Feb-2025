import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextWrapper } from "./contexts/AuthContext.jsx";
import { PizzaContextWrapper } from "./contexts/PizzaContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextWrapper>
      <PizzaContextWrapper>
        <App />
      </PizzaContextWrapper>
    </AuthContextWrapper>
  </BrowserRouter>
);
