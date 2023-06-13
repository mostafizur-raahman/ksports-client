import { useContext } from "react";
import { FaAlignJustify, FaHome, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useSelect from "../../../hooks/useSelect";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [select] = useSelect();
    //todo:admin
    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>

                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className=" items-center grid">
                            <img
                                src={user?.photoURL}
                                className="w-[100px] h-[100px] rounded-full"
                                alt=""
                            />
                            <h1 className="text-2xl font-semibold font-mono">
                                Welcome,
                                <span className="text-sky-500">
                                    {user?.displayName}
                                </span>
                            </h1>
                        </div>
                        {isAdmin ? (
                            <>
                                <li>
                                    <Link
                                        to="/dashboard/manageClass"
                                        className="flex items-center gap-3"
                                    >
                                        <FaAlignJustify></FaAlignJustify> Manage
                                        Classes
                                    </Link>
                                </li>
                                <li>
                                <Link
                                        to="/dashboard/addclass"
                                        className="flex items-center gap-3"
                                    >
                                        <FaUtensils></FaUtensils> Add a class
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard/allusers"
                                        className="flex items-center gap-3"
                                    >
                                        <FaUser></FaUser> Manage User
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        to="/dashboard/myselect"
                                        className="flex items-center gap-3"
                                    >
                                        <FaShoppingCart></FaShoppingCart>My Cart{" "}
                                        <div className="badge badge-secondary">
                                            +{select?.length || 0}
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard/enroll"
                                        className="flex items-center gap-3"
                                    >
                                        <FaAlignJustify></FaAlignJustify> Enroll
                                        class
                                    </Link>
                                </li>
                            </>
                        )}
                        <div className="divider"></div>
                        <li>
                            <Link to="/" className="flex items-center gap-3">
                                {" "}
                                <FaHome> </FaHome>Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
