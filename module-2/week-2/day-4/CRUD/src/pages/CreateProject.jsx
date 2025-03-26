import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/apiConfig";
export const CreateProject = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
  });
  const [image, setImage] = useState(null);
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
      //before sending the project to the server, we need to send the image to cloudinary
      //create a form data
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "Ironhack");
      data.append("cloud_name", import.meta.env.VITE_API_CLOUD_NAME);
      //after you create the form data and add all the properties
      //send an axios post request to cloudinary to 'host' your image
      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dxurcuyga/image/upload",
        data
      );
      console.log(
        "here is the cloud res: ",
        cloudinaryResponse.data.sercure_url
      );
      //this is where we send the project to create to the json server
      const res = await axios.post(`${API_URL}/projects`, {
        ...project,
        image: cloudinaryResponse.data.secure_url,
      });
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
        <label>
          Image:
          <input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
};
