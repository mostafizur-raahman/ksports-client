import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch("https://sports-academics-server.vercel.app/users");
        return res.json();
    });
    const handlInstructor = (user) => {
        fetch(`https://sports-academics-server.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is instructor now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    const handleAdmin = (user) => {
        fetch(`https://sports-academics-server.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
     };
    return (
        <div>
            <h1 className="text-3xl font-semibold">
                Total user :{users.length}
            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="flex gap-3">
                                    {user.role === "admin" ? "admin" : (
                                        <button
                                            onClick={() =>
                                                handleAdmin(user)
                                            }
                                            className="btn btn-primary"
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                    {user.role === "instructor" ? "instructor"
                                     : 
                                        <button
                                            onClick={() =>
                                                handlInstructor(user)
                                            }
                                            className="btn btn-secondary"
                                        >
                                            Make Instructor
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
