import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import About from "../components/About";
import CompletedProjects from "../components/CompletedProjects";
import Locations from "../components/Locations";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { 
          path: "/",
          element: <Banner />
        },
        { 
          path: "/projects",
          element: <Projects />
        },
        { 
          path: "/about",
          element: <About />
        },
        { 
          path: "/completed-projects",
          element: <CompletedProjects />
        },
        { 
          path: "/locations",
          element: <Locations />
        }
      ]
    },
  ]);

export default router;