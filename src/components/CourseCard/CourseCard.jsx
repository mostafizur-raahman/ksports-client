import { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelect from "../../hooks/useSelect";

const CourseCard = ({ course }) => {
    const { name, teacher_name, availableSeats, price, image, enroll, _id } =
        course;
    const { user } = useContext(AuthContext);
    const [, refetch] = useSelect();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSelectCourse = (course) => {
        console.log(course);
        if (user && user.email) {
           
            const selectItem = {
                itemId: _id,
                name,
                image,
                teacher_name,
                price,
                email: user?.email,
            };
            fetch("https://sports-academics-server.vercel.app/selects", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(selectItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "Select Course Success!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        } else {
            Swal.fire({
                title: "Please login to select courses?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "ok,Log In!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="hto image" />
            </figure>
            <div className="card-body">
                <h1 className="text-2xl">
                    Course Name: <span className="font-bold">{name}</span>
                </h1>
                <h2 className="text-2xl">
                    Teacher name:{" "}
                    <span className="font-bold">{teacher_name}</span>
                </h2>
                <p className="text-xl">Available seat: {availableSeats}</p>
                <p className="flex items-center text-xl">
                    price: <FaDollarSign></FaDollarSign>
                    {price}
                </p>
                <p className="text-xl">Already Enroll: {enroll} students</p>
                <div
                    onClick={() => handleSelectCourse(course)}
                    className="text-center p-2"
                >
                    <button className="btn btn-primary">Select course</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
