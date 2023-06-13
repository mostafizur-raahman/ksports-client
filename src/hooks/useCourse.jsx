import { useQuery } from "@tanstack/react-query";

const useCourse = () => {
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     fetch("https://sports-academics-server.vercel.app/classes")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setCourses(data);
    //         });
    // }, []);

    // return [courses];
    const { data: courses = [],refetch } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await fetch("https://sports-academics-server.vercel.app/classes");
            return res.json();
        },
    });
    return [courses,refetch]
};
export default useCourse;
