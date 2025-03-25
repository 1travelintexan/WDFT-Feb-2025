import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { CreateProject } from "./pages/CreateProject";
import { UpdateProjectPage } from "./pages/UpdateProjectPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:projectId" element={<ProjectDetailPage />} />
        <Route path="/create/project" element={<CreateProject />} />
        <Route
          path="/update/:projectId"
          element={<UpdateProjectPage name="ragnar" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
