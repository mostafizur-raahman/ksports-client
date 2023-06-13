
import PopularTeacher from "../../../Teacher/PopularTeacher/PopularTeacher";
import Extra from "../../../components/Extra/Extra";
import PopularCourse from "../../PopularCourse/PopularCourse";
import TopSlider from "./TopSlider/TopSlider";


const Home = () => {
  
    return (
        <div>
          <TopSlider></TopSlider>
          <PopularCourse></PopularCourse>
          <PopularTeacher></PopularTeacher>
          <Extra></Extra>
        </div>
    );
};

export default Home;