import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { CreateProject } from "./pages/CreateProject";
function App() {
  return (
    <>
      <h1>CRUD</h1>
      <Link to="/create/project">
        <button>Create a Project </button>
      </Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:projectId" element={<ProjectDetailPage />} />
        <Route path="/create/project" element={<CreateProject />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
