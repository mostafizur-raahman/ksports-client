import { FaTrashAlt } from "react-icons/fa";
import useCourse from "../../../../hooks/useCourse";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageClass = () => {
    const [courses,refetch  ] = useCourse();
    const [axiosSecure]= useAxiosSecure();

    const handleDelete =(course)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selects/${course._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                "Deleted!",
                                "Your course has been deleted.",
                                "success"
                            );
                        }
                    });
                  

                // axiosSecure.delete(`/selects/${course._id}`)
                // .then(res =>{
                //     console.log(course._id);
                //     console.log('deleted data ',res.data);
                //     refetch()
                // })
            }
        });
    }
    return (
        <div>
            <h1 className="text-4xl text-center my-6">Manage Class</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Iamge</th>
                            <th>Teachar name</th>
                            <th>Price</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            courses.map((course ,index)=>  <tr key={course._id}>
                                <td>{index+1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={course.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">
                                        { course.teacher_name  }
                                    </span>
                                </td>
                                <td>${course.price}</td>
                                <td>
                                    <button className="btn bg-yellow-400 btn-ghost btn-xs">
                                        Update
                                    </button>
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(course)}
                                        className="btn  text-white bg-red-500 btn-xs"
                                    >
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            
                            </tr> )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;
