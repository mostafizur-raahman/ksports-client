import { FaDollarSign } from "react-icons/fa";

const CourseCard = ({ course }) => {
    const { name, teacher_name, availableSeats, price, image, enroll } = course;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="hto image" />
            </figure>
            <div className="card-body">
                <h1 className="text-2xl">Course Name: <span className="font-bold">{name}</span></h1>
                <h2 className="text-2xl">Teacher name: <span className="font-bold">{teacher_name}</span></h2>
                <p className="text-xl">Available seat: {availableSeats}</p>
                <p className="flex items-center text-xl">price: <FaDollarSign></FaDollarSign>{price}</p>
                <p className="text-xl">Already Enroll: {enroll} students</p>
                <div className="text-center p-2">
                    <button className="btn btn-primary">Select course</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
