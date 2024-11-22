import { Button, Table } from "antd";
import { Link } from "react-router-dom";

const Blog = () => {
  
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
      <Table />
    </div>
  );
};

export default Blog;
