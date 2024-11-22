import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import {
  useDeleteSkillByIdMutation,
  useGetAllSkillsQuery,
} from "../redux/services/skill/skillApi";
import { toast } from "sonner";

const Skills = () => {
  const [deleteSkill] = useDeleteSkillByIdMutation();
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Experience (Months)",
      dataIndex: "experienceMonths",
      key: "experienceMonths",
    },
    {
      title: "Experience (Years)",
      dataIndex: "experienceYears",
      key: "experienceYears",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: any) => (
        <button
          onClick={async () => {
            await deleteSkill(record._id);
            toast.success("Skill deleted successfully!");
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete
        </button>
      ),
    },
  ];

  const { data: skills, isFetching } = useGetAllSkillsQuery("");

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Skills Management
        </h1>
        <p className="text-gray-600 mt-2">
          Manage and track your Skills effectively.
        </p>
      </header>
      <Link to="/skills/create" className="text-blue-600 font-medium">
        <Button type="primary" size="large">
          Add New Skills
        </Button>
      </Link>
      <br />
      <div>
        <Table
          columns={columns}
          loading={isFetching}
          dataSource={skills?.data}
        />
      </div>
    </div>
  );
};

export default Skills;
