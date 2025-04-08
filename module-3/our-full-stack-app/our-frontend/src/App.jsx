import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUpPage } from "./pages/SignUpPage";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import { AllPizzas } from "./pages/AllPizzas";
import { CreatePizza } from "./pages/CreatePizza";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import EditPizza from "./pages/EditPizza";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/all-pizzas" element={<AllPizzas />} />
        <Route path="/create-a-pizza" element={<CreatePizza />} />
        <Route path="/edit-pizza/:pizzaId" element={<EditPizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
