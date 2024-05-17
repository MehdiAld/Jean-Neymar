import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/Homepage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import BooksPageNumber from "./pages/BooksPageNumber.jsx";
import BooksPageNumber1 from "./pages/BooksPageNumber1.jsx";
import BooksPageNumber2 from "./pages/BooksPageNumber2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/books/0",
        element: <BooksPageNumber />,
      },
      {
        path: "/books/1",
        element: <BooksPageNumber1 />,
      },
      {
        path: "/books/2",
        element: <BooksPageNumber2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
