
import { FaFire } from 'react-icons/fa';
import useTeaacher from '../../hooks/useTeacher';
import HotTeacher from '../HotTeacher/HotTeacher';

const PopularTeacher = () => {
    const [teacher] = useTeaacher();
    const popular = teacher.filter(singleTeacher => singleTeacher.popular == true );
    console.log(teacher);
    console.log(popular);
    return (
        <div>
             <div className=" mt-10 uppercase">
                <h1 className="text-4xl font-bold items-center justify-center p-2 flex gap-3 m-10 ">
                    <FaFire className="text-orange-400"></FaFire> Popular teacher
                </h1>
                <div className='grid lg:grid-cols-3'>
                    {
                        popular.map((teacher,index) => <HotTeacher key={index} teacher={teacher}></HotTeacher>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularTeacher;