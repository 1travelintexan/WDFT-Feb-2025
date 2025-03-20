import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecipeWrapper } from "./contexts/RecipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipeWrapper>
);
