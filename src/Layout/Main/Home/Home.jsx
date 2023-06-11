import PopularTeacher from "../../../Teacher/PopularTeacher/PopularTeacher";
import PopularCourse from "../../PopularCourse/PopularCourse";
import TopSlider from "./TopSlider/TopSlider";


const Home = () => {
    return (
        <div>
          <TopSlider></TopSlider>
          <PopularCourse></PopularCourse>
          <PopularTeacher></PopularTeacher>
        </div>
    );
};

export default Home;