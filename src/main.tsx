import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LogIn from "./pages/LogIn.tsx";
import CreateAccount from "./pages/CreateAccount.tsx";
import { Router } from "lucide-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
