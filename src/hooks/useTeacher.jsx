import { useEffect, useState } from "react";

const useTeacher = () => {
    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/teacher")
            .then((res) => res.json())
            .then((data) => {
                setTeacher(data);
            });
    }, []);

    return [teacher];
};

export default useTeacher;
