import { Layout, Menu } from "antd";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdMessage } from "react-icons/md";
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
    key: "something",
    label: "Something",
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
