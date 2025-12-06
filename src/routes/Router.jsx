import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />
    }
])