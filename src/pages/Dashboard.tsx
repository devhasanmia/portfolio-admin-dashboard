import { FiEdit } from "react-icons/fi";
import InfoBox from "../components/InfoBox/InfoBox";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdMessage } from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Dashboard</h1>
        <p className="text-lg text-gray-600">
          Overview of your performance and stats
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <InfoBox
          title="Total Blog"
          shortDec="25"
          shortMsg="Updated Data"
          icon={<FiEdit />}
          classes="bg-green-500"
        />
        <InfoBox
          title="Total Projects"
          shortDec="125"
          shortMsg="Updated Data"
          icon={<AiOutlineFundProjectionScreen />}
          classes="bg-blue-500"
        />
        <InfoBox
          title="New Messages"
          icon={<MdMessage />}
          shortDec="45"
          shortMsg="Unread Message"
          classes="bg-red-400"
        />
      </div>
    </div>
  );
};

export default Dashboard;
