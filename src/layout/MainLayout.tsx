import { useState } from "react";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { RiMenu2Line } from "react-icons/ri";
import { LuPanelRightClose } from "react-icons/lu";
import { Button, Layout, Avatar } from "antd";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/services/auth/authSlice";
const { Header, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <LuPanelRightClose /> : <RiMenu2Line />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "16px",
            }}
          >
            <Avatar size="large" icon={<UserOutlined />} />
            <span style={{ marginLeft: "8px", color: "#fff" }}>
              Administrator
            </span>
            <Button
              onClick={() => {
                dispatch(logout());
                window.location.href = "/login";
              }}
              type="text"
              icon={<LogoutOutlined />}
              style={{ marginLeft: "16px", color: "#f5222e" }}
            >
              Log Out
            </Button>
          </div>
        </Header>
        <Content
          className="p-6 bg-gray-50 min-h-screen rounded-lg"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
