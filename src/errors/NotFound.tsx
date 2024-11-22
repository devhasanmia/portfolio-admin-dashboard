import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page Not Found
        </p>
        <p className="text-lg text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="relative inline-block">
          <div className="absolute inset-0  bg-purple-600 rounded-full blur-lg"></div>
          <Link to={"/"}>
          <button className="relative px-6 py-3  bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            Back to Home
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
