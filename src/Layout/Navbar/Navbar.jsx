import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = (
        <>
            <div className="flex gap-3">
                <NavLink>Home</NavLink>
                <NavLink>Instructor</NavLink>
                <NavLink>Classes</NavLink>
                <NavLink>Dashboard</NavLink>
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
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
