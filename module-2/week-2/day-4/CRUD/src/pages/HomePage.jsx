import { Link } from "react-router-dom";
import { RecipeContext } from "../contexts/RecipeContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import { API_URL } from "../config/apiConfig";

export const HomePage = () => {
  // const { allRecipes, handleDelete } = useContext(RecipeContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  //here we need get all of the projects from our server
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`${API_URL}/projects`)
        .then((res) => {
          console.log(res.data);
          setProjects(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 1000);
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
      .delete(`${API_URL}/projects/${projectId}`)
      .then((res) => {
        console.log("project deleted... nice work", res.data);
      })
      .catch((err) => console.log(err));
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1>CRUD</h1>
      <label>
        Search Projects:
        <input
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </label>
      <Link to="/create/project">
        <button>Create a Project </button>
      </Link>
      <h1>Projects:</h1>
      {projects
        .filter((proj) =>
          proj.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((oneProject) => {
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
              <Link to={`/update/${oneProject.id}`}>
                <button>Update</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};
