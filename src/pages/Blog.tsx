import { Button, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import {
  useDeleteBlogMutation,
  useGetAllBlogQuery,
} from "../redux/services/blog/BlogApi";
import { toast } from "sonner";

const Blog = () => {
  const { data: blogData, isFetching } = useGetAllBlogQuery("");
  const [deleteBlog] = useDeleteBlogMutation();
  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail: string) => (
        <img
          src={thumbnail}
          alt="Thumbnail"
          style={{ width: "80px", height: "auto", borderRadius: "5px" }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <div className="space-x-2">
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={async () => {
              await deleteBlog(record._id);
              toast.success("Blog deleted successfully!");
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Blog Post Management
        </h1>
        <p className="text-gray-600 mt-2">
          Manage and track your Blog effectively.
        </p>
      </header>
      <Link to="/blog/create" className="text-blue-600 font-medium">
        <Button type="primary" size="large">
          Add New Blog
        </Button>
      </Link>
      <br />
      {/* Blog List */}
      <Table
        className="mt-8"
        columns={columns}
        dataSource={blogData?.data}
        loading={isFetching}
      />
    </div>
  );
};

export default Blog;
