import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, {loader as postsLoader} from "./routes/Posts";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader, // this loader will be executed before serving the component, and the data returned by the loader will be available to he Posts component as well the nested components of Posts components.
        children: [{ path: "/create-posts", element: <NewPost /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
