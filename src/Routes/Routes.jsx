import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Main/Home/Home";
import Instructor from "../Layout/Main/Instructors/Instructor";
import Class from "../Layout/Main/Classes/Class";
import Dashboard from "../Layout/Main/Dashboard/Dashboard";
import Login from "../Layout/Login/Login";
import Registration from "../Layout/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import MySelect from "../Layout/Main/Dashboard/MySelect/MySelect";
import AllUsers from "../Layout/Main/Dashboard/AllUsers/AllUsers";
import AddClass from "../Layout/Main/Dashboard/AddClass/AddClass";
import ManageClass from "../Layout/Main/Dashboard/ManageClass/ManageClass";
import Payment from "../Layout/Main/Dashboard/Payment/Payment";
import PaymentHistory from "../Layout/Main/Dashboard/PaymentHistory/PaymentHistory";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/instructor",
                element: <Instructor></Instructor>,
            },
            {
                path: "/classes",
                element: <Class></Class>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Registration></Registration>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'myselect',
                element:<MySelect></MySelect>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'addclass',
                element:<AddClass></AddClass>
            },
            {
                path:'manageClass',
                element:<ManageClass></ManageClass>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            }
        ]
    },
]);
export default router;
