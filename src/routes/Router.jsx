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
import Services from "../pages/Services/Services";
import ServicesDetails from "../pages/Services/ServicesDetails";
import Contract from "../pages/Contract/Contract";
import About from "../pages/About/About";
import AdminRouter from "./AdminRouter";
import CreatePack from "../pages/Dashboard/Admin/CreatePack";
import Payment from "../pages/Payment/Payment";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import UpdatePack from "../pages/Dashboard/Admin/UpdatePack";
import UserRouter from "./UserRouter";
import DecoratorRouter from "./DecoratorRouter";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <LoadingSpinner />,
        children: [
            {
                index: true,
                element: <Home />
            },
            // {
            //     path: "/coverage",
            //     element: <Coverage />,
            //     loader: () => fetch('/serviceCenter.json')
            // },
            {
                path: "/services",
                element: <PrivateRouter><Services /></PrivateRouter>

            },
            {
                path: "/services-details/:id",
                element: <PrivateRouter><ServicesDetails /></PrivateRouter>

            },
            {
                path: "/contract",
                element: <Contract />

            },
            {
                path: "/about",
                element: <About />

            },
            {
                path: "/payment-success",
                element: <Payment />
            },
            {
                path: "/edit-service/:id",
                element: <PrivateRouter><AdminRouter><UpdatePack /></AdminRouter></PrivateRouter>
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
        hydrateFallbackElement: <LoadingSpinner />,
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/payment-success",
        element: <Payment />
    },

    {
        path: '/dashboard',
        element: <PrivateRouter><DashBoardLayout /> </PrivateRouter>,
        hydrateFallbackElement: <LoadingSpinner />,
        children: [
            {
                path: "profile",
                element: < Profile />
            },
            // users routes
            {
                path: 'my-booking',
                element: <UserRouter><MyBooking /></UserRouter>
            },
            {
                path: 'payment-history',
                element: <UserRouter><PaymentHistory /></UserRouter>
            },
            // Decorator routes
            {
                path: 'earn-summary',
                element: <DecoratorRouter><EarningSummary /></DecoratorRouter>
            },
            {
                path: 'assign-project',
                element: <DecoratorRouter><AssignProject /></DecoratorRouter>
            },
            {
                path: 'today-schedule',
                element: <DecoratorRouter><TodaySchedule /></DecoratorRouter>
            },
            // Admin routes
            {
                path: 'manage-decorator',
                element: <AdminRouter><ManageDecor /></AdminRouter>
            },
            {
                path: 'manage-service',
                element: <AdminRouter><ManageServices /></AdminRouter>
            },
            {
                path: 'manage-booking',
                element: <AdminRouter><ManageBooking /></AdminRouter>
            },
            {
                path: 'revinue-monitoring',
                element: <AdminRouter><RevenueMoniror /></AdminRouter>
            },
            {
                path: 'create-package',
                element: <AdminRouter><CreatePack /></AdminRouter>
            },


        ]
    }
])