import { Layout, Menu } from "antd";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiSkills,GiNotebook } from "react-icons/gi";
import { MdMessage, MdOutlineSettingsSuggest } from "react-icons/md";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;
const items = [
  {
    key: "dashboard",
    icon: <LuLayoutDashboard />,
    label: <NavLink to={"/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "Messages",
    icon: <MdMessage />,
    label: <NavLink to={"/messages"}>Messages</NavLink>,
  },
  {
    key: "projects",
    icon: <AiOutlineFundProjectionScreen />,
    label: <NavLink to={"/projects"}>Projects</NavLink>,
  },
  {
    key: "blog",
    icon: <GiNotebook />,
    label: <NavLink to={"/blog"}>Blog</NavLink>,
  },
  {
    key: "skills",
    icon: <GiSkills />,
    label: <NavLink to={"/skills"}>Skills</NavLink>,
  },
  {
    key: "settings",
    icon: <MdOutlineSettingsSuggest />,
    label: <NavLink to={"/settings"}>Settings</NavLink>,
  },
];


const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ background: "#001529" }}
    >
      <div
        style={{
          height: "32px",
          margin: "16px",
          textAlign: "center",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {
          collapsed? "Admin" : "Admin Panel"
        }
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
