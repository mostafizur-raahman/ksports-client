import { useEffect, useState } from "react";

const useTeacher = () => {
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        fetch("https://sports-academics-server.vercel.app/teacher")
            .then((res) => res.json())
            .then((data) => {
                setTeacher(data);
            });
    }, []);

    return [teacher];
};

export default useTeacher;
