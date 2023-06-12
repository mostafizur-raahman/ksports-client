
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
    const{ createUser, updateUserProfile} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(loggedUser =>{
            const user = loggedUser.user;
            console.log(user);
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Registration successfull!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  Navigate('/')
            })
            .catch(e=>console.log(e))
        })
    };
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                {...register("name", { required: true })}
                                className="input input-bordered"
                            />
                            {errors.name && <span className="text-red-500">Name field is required*</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                name="email"
                                {...register("email",{ required: true })}
                                className="input input-bordered"
                            />
                            {errors.email && <span className="text-red-500">email is required*</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                {...register("password",{ required: true })}
                                className="input input-bordered"
                            />
                            {errors.password && <span className="text-red-500">password field is required*</span>}
                            
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Confirm Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                {...register("confirm_password",{ required: true })}
                                className="input input-bordered"
                            />
                            {errors.confirm_password && <span className="text-red-500">password does not match*</span>}
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                name="photoURL"
                                {...register("photoURL",{ required: true })}
                                className="input input-bordered"
                            />
                             {errors.photoURL && <span className="text-red-500">This field is required*</span>}
                           
                        </div>
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                className="btn btn-neutral"
                                value="Register"
                            />
                        </div>
                    </form>
                    <Link to='/login' className="text-center p-4">Alrady have an account, <span className="text-sky-500">Please Login!!</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;
