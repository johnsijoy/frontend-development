import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    liveLink: "",
    imageUrl: "",
  });

  // Fetch all projects from the backend
  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/projects");
      console.log("Fetched Projects:", response.data.result); // Debugging log to see the response
      setProjects(response.data.result); // Assuming 'result' contains the project array
    } catch (error) {
      console.error("Error fetching projects:", error);
      alert("Failed to fetch projects. Please try again later.");
    }
  };

  // Add a new project
  const handleAddProject = async () => {
    try {
      const projectData = {
        title: newProject.title,
        description: newProject.description,
        technologies: newProject.technologies
          .split(",")
          .map((tech) => tech.trim()), // Convert to array
        imageUrl: newProject.imageUrl,
        liveLink: newProject.liveLink,
      };

      await axios.post("http://localhost:5001/api/projects", projectData);
      fetchProjects(); // Refresh the project list
      setNewProject({ title: "", description: "", technologies: "", liveLink: "", imageUrl: "" }); // Reset the form
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project. Please try again.");
    }
  };

  // Delete a project
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/projects/${id}`);
      fetchProjects(); // Refresh the project list
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h1>Portfolio</h1>

      {/* Display Existing Projects */}
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project._id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                style={{ width: "200px", height: "auto" }}
              />
            )}
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </p>
            <button onClick={() => handleDelete(project._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No projects available.</p>
      )}

      {/* Add New Project Form */}
      <div className="add-project">
        <h2>Add New Project</h2>
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
        />
        <textarea
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        ></textarea>
        <input
          type="text"
          placeholder="Technologies (comma separated)"
          value={newProject.technologies}
          onChange={(e) =>
            setNewProject({
              ...newProject,
              technologies: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProject.imageUrl}
          onChange={(e) =>
            setNewProject({ ...newProject, imageUrl: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Live Link"
          value={newProject.liveLink}
          onChange={(e) =>
            setNewProject({ ...newProject, liveLink: e.target.value })
          }
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>
    </div>
  );
};

export default Portfolio;
