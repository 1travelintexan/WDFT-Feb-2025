import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SiginupPage } from "./pages/SignupPage";
import { NotFound } from "./pages/NotFound";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PetPage } from "./pages/PetPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiginupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pets"
          element={
            <ProtectedRoute>
              <PetPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
