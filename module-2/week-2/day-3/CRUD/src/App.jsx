import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DetailPage } from "./pages/DetailPage";
import { CreateRecipe } from "./pages/CreateRecipe";
function App() {
  return (
    <>
      <h1>CRUD</h1>
      <Link to="/create">
        <button>Create a Recipe </button>
      </Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:recipeId" element={<DetailPage />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
