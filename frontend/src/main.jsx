import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NewPost, { action as newPostAction } from "./pages/NewPost.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Posts, { loader as loaderPost } from "./pages/Posts.jsx";
import "./index.css";
import EditPost, { loader as EditPostLoader } from "./pages/EditPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: loaderPost,
        children: [
          { path: "newPost", element: <NewPost />, action: newPostAction },
          { path: ":id", element: <EditPost />, loader: EditPostLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
