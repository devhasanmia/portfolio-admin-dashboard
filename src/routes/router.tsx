import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";
import NotFound from "../errors/NotFound";
import Skills from "../pages/Skills";
import Blog from "../pages/Blog";
import Create from "../pages/projects/Create";
import Login from "../pages/auth/Login";
import CreateSkills from "../pages/skills/CreateSkills";
import CreateBlog from "../pages/blog/CreateBlog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/create",
        element: <Create />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "skills/create",
        element: <CreateSkills />,
      },
      {
        path: "blog/create",
        element: <CreateBlog />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
