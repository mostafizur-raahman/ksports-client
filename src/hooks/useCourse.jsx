import { useQuery } from "@tanstack/react-query";

const useCourse = () => {
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:5000/classes")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setCourses(data);
    //         });
    // }, []);

    // return [courses];
    const { data: courses = [],refetch } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/classes");
            return res.json();
        },
    });
    return [courses,refetch]
};
export default useCourse;
