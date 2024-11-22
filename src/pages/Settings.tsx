import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Settings Page
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This feature is under construction. Stay tuned for updates!
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

export default Settings;
