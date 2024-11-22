import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Messages from "../pages/Messages";
import Settings from "../pages/Settings";
import NotFound from "../errors/NotFound";
import Skills from "../pages/Skills";
import Blog from "../pages/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "messages",
        element: <Messages />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "skills",
        element: <Skills/>
      },
      {
        path: "settings",
        element: <Settings/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
      
    ]
  }
]);

export default router;
