import { FaDollarSign, FaUser } from "react-icons/fa";

const HotCourse = ({ course }) => {
    const {  name, image, availableSeats, price, description,enroll } = course;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="hto image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div>
                    <p className="flex items-center text-xl gap-2">
                        
                        <FaUser></FaUser>Available seat: <span className="font-bold">{availableSeats}</span>
                    </p>
                </div>
                <p className="flex items-center text-2xl">price: <FaDollarSign></FaDollarSign> {price}</p>
                <p className="text-2xl font-semibold">Already Enroll : {enroll}</p>
                {/* <div className="card-actions justify-center">
                    <button className="btn btn-primary">Enroll Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default HotCourse;
