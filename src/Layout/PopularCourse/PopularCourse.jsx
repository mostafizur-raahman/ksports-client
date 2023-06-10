
import { FaFire } from "react-icons/fa";
import HotCourse from "./HotCourse/HotCourse";
import useCourse from "../../hooks/useCourse";
const PopularCourse = () => {
    const [course] = useCourse();
    const popular = course.filter(singleCourse => singleCourse.category === 'popular');
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     fetch("allcourse.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const popularCourse = data.filter(
    //                 (item) => item.category === "popular"
    //             );
    //             setCourses(popularCourse);
    //         });
    // }, []);


    return (
        <div >
            <div className=" mt-10 uppercase">
                <h1 className="text-4xl font-bold items-center justify-center p-2 flex gap-3 ">
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
