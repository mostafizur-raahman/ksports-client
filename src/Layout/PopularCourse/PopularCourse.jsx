
import { FaFire } from "react-icons/fa";
import HotCourse from "./HotCourse/HotCourse";
import useCourse from "../../hooks/useCourse";
const PopularCourse = () => {
    //custom hook
    
    const [course] = useCourse();
    const popular = course.filter(singleCourse => singleCourse.category === 'popular');
    


    return (
        <div >
            <div className=" mt-10 uppercase">
                <h1 className="text-4xl font-bold items-center justify-center p-9 flex gap-3 ">
                    <FaFire className="text-orange-400"></FaFire> Popular Course
                </h1>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    popular.map(course => <HotCourse key={course._id} course={course}></HotCourse>)
                }
            </div>
        </div>
    );
};

export default PopularCourse;
