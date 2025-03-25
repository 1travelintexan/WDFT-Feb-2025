import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateProjectPage = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  //with the update, the first thing is to fetch all the data for that project
  const { projectId } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5005/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("here is the data for the update:", data);
        setProjectTitle(data.title);
        setProjectDescription(data.description);
      })
      .catch((err) => console.log(err));
  }, [projectId]);

  async function handleUpdateProject(e) {
    //first stop the form from refreshing the page
    e.preventDefault();
    const updateProject = {
      title: projectTitle,
      description: projectDescription,
    };
    //second we make a fetch call to update the server
    axios
      .put(`http://localhost:5005/projects/${projectId}`, updateProject)
      .then((res) => {
        console.log("successfully updated", res.data);
        nav("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h2>Update the Project</h2>
      <form onSubmit={handleUpdateProject}>
        <label>
          Title:
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => {
              setProjectTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={projectDescription}
            onChange={(e) => {
              setProjectDescription(e.target.value);
            }}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
