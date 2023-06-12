import { FaStripe, FaTrashAlt } from "react-icons/fa";
import useSelect from "../../../../hooks/useSelect";
import Swal from "sweetalert2";

const MySelect = () => {
    const [select,refetch] = useSelect();
    console.log(select);
    const total = select?.reduce((sum, next) => next?.price + sum, 0);

    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/selects/${id}`, {
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
            }
        });
    };
    return (
        <>
            <div className="flex items-center gap-10 my-4  ">
                <h1 className="text-3xl uppercase">
                    Select item : {select?.length}
                </h1>
                <h2 className="text-3xl uppercase">Total price :$ {total}</h2>
                <button className="btn btn-secondary btn-sm flex items-center gap-2">
                    <FaStripe className="text-4xl"></FaStripe>Pay
                </button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {select.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item?.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{item.name}</div>
                                </td>
                                <td>$ {item.price}</td>

                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn  text-white bg-red-500 btn-xs"
                                    >
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MySelect;
