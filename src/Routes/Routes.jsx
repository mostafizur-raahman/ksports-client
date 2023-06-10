import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Main/Home/Home";
import Instructor from "../Layout/Main/Instructors/Instructor";
import Class from "../Layout/Main/Classes/Class";
import Dashboard from "../Layout/Main/Dashboard/Dashboard";
import Login from "../Layout/Login/Login";
import Registration from "../Layout/Registration/Registration";

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
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
        ],
    },
]);
export default router;
