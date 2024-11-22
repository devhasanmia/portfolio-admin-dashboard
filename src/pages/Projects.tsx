import { Table, Button, Tooltip } from "antd";
import {
  useDeleteProjectbyIdMutation,
  useGetAllProjectsQuery,
} from "../redux/services/project/projectApi";
import { EyeOutlined, DeleteOutlined, GithubOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Projects = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title: string, record: any) => (
        <div className="flex items-center gap-4">
          <img
            src={record.thumbnail}
            alt={title}
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <h3 className="font-bold text-gray-800">{title}</h3>
          </div>
        </div>
      ),
    },
    {
      title: "Contributors",
      dataIndex: "contributors",
      key: "contributors",
      render: (contributors: any) => (
        <div>
          {contributors.map((contributor: string, index: string) => (
            <span
              key={index}
              className="inline-block bg-green-500 text-white text-xs font-semibold rounded-full px-3 py-1 mr-2"
            >
              {contributor}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Project Type",
      dataIndex: "projectType",
      key: "projectType",
      render: (projectType: string) => (
        <span className="text-blue-600 font-medium">{projectType}</span>
      ),
    },
    {
      title: "Featured",
      dataIndex: "featured",
      key: "featured",
      render: (featured: string) => (
        <span
          className={`${
            featured ? "text-green-500" : "text-gray-500"
          } font-semibold`}
        >
          {featured ? "Featured" : "Not Featured"}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: any) => (
        <div className="flex gap-2">
          <Tooltip title="View Live">
            <Button
              type="link"
              icon={<EyeOutlined />}
              href={record.liveLink}
              target="_blank"
            />
          </Tooltip>
          <Tooltip title="View GitHub">
            <Button
              type="link"
              icon={<GithubOutlined />}
              href={record.githubLink}
              target="_blank"
            />
          </Tooltip>
          <Tooltip title="Delete Project">
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record._id)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const { data: projects, isFetching } = useGetAllProjectsQuery("");
  const [deleteProject] = useDeleteProjectbyIdMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteProject(id).unwrap();
    toast.success(res.message);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Project Management
        </h1>
        <p className="text-gray-600 mt-2">
          Manage and track your projects effectively.
        </p>
      </header>
      <Link to="/projects/create" className="text-blue-600 font-medium">
        <Button type="primary" size="large">
          Add New Project
        </Button>
      </Link>
      <br />
      <br />
      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <Table
          columns={columns}
          dataSource={projects?.data}
          rowKey="_id"
          loading={isFetching}
          pagination={{ pageSize: 5 }}
          className="ant-table-responsive"
        />
      </div>
    </div>
  );
};

export default Projects;
