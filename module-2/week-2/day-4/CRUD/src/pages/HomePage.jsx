import { Link } from "react-router-dom";
import { RecipeContext } from "../contexts/RecipeContext";
import { useEffect, useState } from "react";
import axios from "axios";

export const HomePage = () => {
  // const { allRecipes, handleDelete } = useContext(RecipeContext);
  const [projects, setProjects] = useState([]);
  //here we need get all of the projects from our server
  useEffect(() => {
    axios
      .get("http://localhost:5005/projects")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  function handleDelete(projectId) {
    //first remove from the frontend
    const filteredProjects = projects.filter(
      (oneProject) => projectId !== oneProject.id
    );
    console.log("delete clicked", projectId, filteredProjects);
    setProjects(filteredProjects);
    //second step is to send a request to the json server to delete one project
    axios
      .delete(`http://localhost:5005/projects/${projectId}`)
      .then((res) => {
        console.log("project deleted... nice work", res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>Projects:</h1>
      {projects.map((oneProject) => {
        return (
          <div className="card" key={oneProject.id}>
            <Link to={`/details/${oneProject.id}`}>
              <h3>Title: {oneProject.title}</h3>
            </Link>
            <h3>Description: {oneProject.description}</h3>
            <button
              onClick={() => {
                handleDelete(oneProject.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
