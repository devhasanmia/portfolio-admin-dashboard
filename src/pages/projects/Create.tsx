import { useState } from "react";
import { useCreateProjectMutation } from "../../redux/services/project/projectApi";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const Create = () => {
  const [project, setProject] = useState({
    thumbnail: "",
    title: "",
    description: "",
    technologies: [],
    liveLink: "",
    githubLink: "",
    status: "",
    contributors: [],
    projectType: "",
    featured: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTechnologiesChange = (e: any) => {
    setProject((prev) => ({
      ...prev,
      technologies: e.target.value
        .split(",")
        .map((tech: string) => tech.trim()),
    }));
  };

  const handleContributorsChange = (e: any) => {
    setProject((prev) => ({
      ...prev,
      contributors: e.target.value
        .split(",")
        .map((contributor: any) => contributor.trim()),
    }));
  };

  const handleDescriptionChange = (value: string) => {
    setProject((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const [createProject] = useCreateProjectMutation();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    createProject(project);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Thumbnail */}
          <div>
            <label className="block font-medium">Thumbnail URL</label>
            <input
              type="text"
              name="thumbnail"
              value={project.thumbnail}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter image URL"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter project title"
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="block font-medium">
              Technologies (comma-separated)
            </label>
            <input
              type="text"
              name="technologies"
              value={project.technologies.join(", ")}
              onChange={handleTechnologiesChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="e.g., React, Node.js, MongoDB"
            />
          </div>

          {/* Live Link */}
          <div>
            <label className="block font-medium">Live Link</label>
            <input
              type="text"
              name="liveLink"
              value={project.liveLink}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter live link URL"
            />
          </div>

          {/* GitHub Link */}
          <div>
            <label className="block font-medium">GitHub Link</label>
            <input
              type="text"
              name="githubLink"
              value={project.githubLink}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter GitHub link"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium">Status</label>
            <select
              name="status"
              value={project.status}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Contributors */}
          <div>
            <label className="block font-medium">
              Contributors (comma-separated)
            </label>
            <input
              type="text"
              name="contributors"
              value={project.contributors.join(", ")}
              onChange={handleContributorsChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="e.g., john_doe, jane_smith"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block font-medium">Project Type</label>
            <select
              name="projectType"
              value={project.projectType}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select type</option>
              <option value="personal">Personal</option>
              <option value="collaborative">Collaborative</option>
              <option value="open-source">Open Source</option>
            </select>
          </div>

          {/* Featured */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={project.featured}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="font-medium">Featured</label>
          </div>
        </div>
        <div>
          <div className="mt-6">
            <label className="block font-medium">Description</label>
            <ReactQuill
              value={project.description}
              onChange={handleDescriptionChange}
              className="mt-1 border rounded-lg"
              theme="snow"
              placeholder="Enter project description"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Project
        </button>
      </form>
    </div>
  );
};

export default Create;
