import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Contacts } from "../pages/Contacts";
import { Blog } from "../pages/Blog";
import { Post1 } from "../pages/Posts/post1";
import { Post2 } from "../pages/Posts/post2";
import { Layout } from "./Layout";
import { About } from "../pages/About";
import { Programs } from "../pages/Programs";


const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", Component: Home },
      { path: "kontakty/", Component: Contacts },
      { path: "o-nas/", Component: About },
      { path: "programmy-nablyudeniya-za-zdorovem/", Component: Programs },

      {
        path: "blog/",
        Component: Blog,
        children: [
          { path: "post1/", Component: Post1 },
          { path: "post2/", Component: Post2 },
        ],
      },
    ],
  },
]);
export default routes;
