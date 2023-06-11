import CourseCard from "../../../components/CourseCard/CourseCard";
import useCourse from "../../../hooks/useCourse";

const Class = () => {
    const [courses] = useCourse();
    return (
        <div>
            <h1 className="text-4xl text-center font-mono font-bold p-4 uppercase">All classes here!</h1>

            <div className="grid md:grid-cols-3 mx-auto gap-10">
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Class;