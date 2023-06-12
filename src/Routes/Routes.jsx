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
import Enroll from "../Layout/Main/Dashboard/Enroll/Enroll";
import AllUsers from "../Layout/Main/Dashboard/AllUsers/AllUsers";
import AddClass from "../Layout/Main/Dashboard/AddClass/AddClass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
        children:[
            {
                path:'myselect',
                element:<MySelect></MySelect>
            },
            {
                path:'enroll',
                element:<Enroll></Enroll>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'addclass',
                element:<AddClass></AddClass>
            }
        ]
    },
]);
export default router;
