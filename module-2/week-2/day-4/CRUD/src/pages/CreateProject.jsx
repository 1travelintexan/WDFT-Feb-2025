import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateProject = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
  });
  //create the nav variagble
  const nav = useNavigate();
  function handleTitle(event) {
    const key = event.target.name;
    const whatWasTyped = event.target.value;
    setProject({ ...project, [key]: whatWasTyped });
  }
  async function handleCreateProject(event) {
    //first we need to stop the page from reloading...
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5005/projects", project);
      console.log("project created! Nice work! You are a dev now", res.data);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>Create a Project</h2>
      <form onSubmit={handleCreateProject}>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={project.title}
            onChange={handleTitle}
          />
        </label>
        <label>
          Description:
          <input
            name="description"
            type="text"
            value={project.description}
            onChange={handleTitle}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
};
