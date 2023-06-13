import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";

import { FaHeadphones } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useSelect from "../../hooks/useSelect";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [select,refetch] = useSelect();

    const [theme,setTheme] = useState(false)
    const toggleTheme =()=>{
        setTheme(!theme)
    }
    useEffect(()=>{
        if(theme) document.body.classList.add('dark');
        else document.body.classList.remove('dark');
    },[theme])
    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch((e) => console.log(e));
    };
    const navItems = (
        <>
            <div className="flex gap-3 items-center">
                <NavLink to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/instructor" activeClassName="active">
                    Instructor
                </NavLink>
                <NavLink to="/classes" activeClassName="active">
                    Classes
                </NavLink>
                <NavLink to="/dashboard/myselect" className="flex items-center gap-2">
                    
                    <p>Dashboard</p>
                    <div className="badge badge-secondary">+{select?.length || 0}</div>
                </NavLink>
                <button className="btn" onClick={toggleTheme}>{theme?"Light" : 'Dark'}</button>
                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <img
                                className="w-[50px] h-[50px] rounded-full"
                                src={user?.photoURL}
                                alt="user"
                            />
                            <button className="btn" onClick={handleLogout}>
                                Log out
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/register" activeClassName="active">
                                Register
                            </NavLink>
                            <NavLink to="/login" activeClassName="active">
                                Login
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </>
    );
    return (
        <div>
            <div className="navbar bg-sky-600 text-white font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navItems}
                        </ul>
                    </div>
                    <img
                        src="https://i.ibb.co/HKNTfBm/Screenshot-1.png"
                        className="w-[120px] h-[80px] rounded-lg"
                        alt=""
                    />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>
                <div className="navbar-end">
                    <p className="text-xl flex items-center gap-2">
                        <FaHeadphones></FaHeadphones> Customer Care
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
