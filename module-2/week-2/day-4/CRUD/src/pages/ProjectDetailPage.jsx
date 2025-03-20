import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProjectDetailPage = () => {
  const [oneProject, setOneProject] = useState({});
  //first thing we need is id from the URL
  const { projectId } = useParams();
  //the next thing is too ask the json server for the details for that project
  useEffect(() => {
    fetch(`http://localhost:5005/projects/${projectId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("here is the data", data);
        setOneProject(data);
      })
      .catch((err) => console.log(err));
  }, [projectId]);
  return (
    <div>
      <h2>{oneProject.title}'s Detail Page</h2>
      <h3>Description: {oneProject.description}</h3>
    </div>
  );
};
