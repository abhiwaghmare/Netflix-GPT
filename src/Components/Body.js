import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetails />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
