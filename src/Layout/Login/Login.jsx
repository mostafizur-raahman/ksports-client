import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, handleGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const google =()=>{
        handleGoogle();
    }
    const to = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        signIn(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: "top",
                icon: "success",
                title: "log in successfull!",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate(to, { replace: true });
        });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* login form */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Log in"
                                className="btn btn-neutral"
                            />
                        </div>
                    </form>
                    <Link to="/register" className="text-center p-2">
                        New to Ksports{" "}
                        <span className="text-sky-500">Register</span>!
                    </Link>
                    <div className="flex mx-auto p-2">
                        <button onClick={google} className="flex items-center gap-2 text-2xl text-center"><FaGoogle className="text-red-500"></FaGoogle>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
