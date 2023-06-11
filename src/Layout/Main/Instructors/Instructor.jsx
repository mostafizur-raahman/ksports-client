import useTeacher from "../../../hooks/useTeacher";
import SingleInstructor from "./SingleInstructor";

const Instructor = () => {
    const [teacher] = useTeacher();

    return (
        <div>
            <h1 className="text-center text-5xl m-5 p-5">All Instructor Here</h1>
            <div className="grid md:grid-cols-3">
                {teacher.map((teacher) => (
                    <SingleInstructor
                        key={teacher.id}
                        teacher={teacher}
                    ></SingleInstructor>
                ))}
            </div>
        </div>
    );
};

export default Instructor;
