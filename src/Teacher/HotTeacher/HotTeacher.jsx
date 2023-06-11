
import { FaHeart } from 'react-icons/fa';

const HotTeacher = ({teacher}) => {
    const {name,img,bio,likes,experience,category} = teacher;
    return (
        <div>
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="hto image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">{name}</h2>
                <p className='text-2xl'>Course name : {category}</p>
                <p >{bio}</p>
                <p className='text-xl'>Years of experiance: {experience}</p>
                <p className='flex items-center text-xl gap-2'>Polularity: <FaHeart></FaHeart> {likes}</p>
               
            </div>
        </div>
        </div>
    );
};

export default HotTeacher;