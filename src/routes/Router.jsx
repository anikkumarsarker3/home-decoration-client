import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Profile from "../pages/Dashboard/Common/Profile";
import PrivateRouter from "./PrivateRouter";
import MyBooking from "../pages/Dashboard/User/MyBooking";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory";
import EarningSummary from "../pages/Dashboard/Decorator/EarningSummary";
import AssignProject from "../pages/Dashboard/Decorator/AssignProject";
import ManageDecor from "../pages/Dashboard/Admin/ManageDecor";
import ManageServices from "../pages/Dashboard/Admin/ManageServices";
import ManageBooking from "../pages/Dashboard/Admin/ManageBooking";
import AssignDecor from "../pages/Dashboard/Admin/RevenueMoniror";
import TodaySchedule from "../pages/Dashboard/Decorator/TodaySchedule";
import RevenueMoniror from "../pages/Dashboard/Admin/RevenueMoniror";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/coverage",
                element: <Coverage />,
                loader: () => fetch('/serviceCenter.json')

            },
        ]
    },


    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />
    },

    {
        path: '/dashboard',
        element: <PrivateRouter><DashBoardLayout /> </PrivateRouter>,
        children: [
            {
                path: 'profile',
                element: <Profile />
            },
            // users routes
            {
                path: 'my-booking',
                element: <MyBooking />
            },
            {
                path: 'payment-history',
                element: <PaymentHistory />
            },
            // Decorator routes
            {
                path: 'earn-summary',
                element: <EarningSummary />
            },
            {
                path: 'assign-project',
                element: <AssignProject />
            },
            {
                path: 'today-schedule',
                element: <TodaySchedule />
            },
            // Admin routes
            {
                path: 'manage-decorator',
                element: <ManageDecor />
            },
            {
                path: 'manage-service',
                element: <ManageServices />
            },
            {
                path: 'manage-booking',
                element: <ManageBooking />
            },
            {
                path: 'revinue-monitoring',
                element: <RevenueMoniror />
            },

        ]
    }
])