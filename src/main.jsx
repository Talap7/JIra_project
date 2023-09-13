import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RegisterForm } from "./pages/registerForm.jsx";
import { LoginForm } from "./pages/loginForm.jsx"
import { ConfirmForm } from "./pages/confirmForm.jsx"
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { Content } from "./components/content.jsx";
import { Cabinet } from "./components/cabinet.jsx";
import { CabinetContent } from "./components/cabinetContent.jsx";
import { WorkSpace } from "./components/workSpace.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Content/>},

      ]
    },
    {
      path: "/cabinet",
      element: <Cabinet/>,
      children: [
        {path: "/cabinet", element: <CabinetContent/>},
        {path: "/cabinet/:id?", element: <WorkSpace/>},
      ] 
      },
    {path: "/register", element: <RegisterForm/>},
    {path: "/login", element: <LoginForm/>},
    {path: "/confirm", element: <ConfirmForm/>},

  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>

);
