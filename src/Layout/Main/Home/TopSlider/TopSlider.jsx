import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./TopSlider.css";
const TopSlider = () => {
    return (
        <div>
            <AwesomeSlider>
                <div className="bgImg">
                    <div>
                        <h1 className="text-4xl absolute text-white m-20 p-20 font-bold">
                            Football coaching is essential for developing
                            players skills, improving team performance, and
                            fostering a positive team environment. Coaches focus
                            on teaching technical skills, implementing effective
                            training sessions, and instilling discipline,
                            motivation, and sportsmanship values in players.{" "}
                            <br />
                            
                        </h1>
                        
                    </div>
                </div>
                <div className="bgImg2">
                    <h1 className="text-4xl absolute text-white m-20 p-20 font-bold">
                        {" "}
                        Cricket coaching involves guiding players in developing
                        their skills, strategies, and teamwork to excel in the
                        sport. Coaches focus on refining techniques, tactical
                        understanding, and fostering a positive team dynamic to
                        enhance performance on the cricket field. Effective
                        coaching instills discipline, motivation, and
                        sportsmanship values in players, nurturing their overall
                        growth and success in cricket.
                    </h1>
                </div>
                <div className="bgImg3">
                    <h1 className="text-4xl absolute text-white font-semibold m-20 p-20">
                        Badminton coaching encompasses teaching players the
                        necessary skills, techniques, and strategies to excel in
                        the sport. Coaches focus on improving footwork, racket
                        skills, and game understanding to enhance players
                        performance on the court. Effective coaching also
                        emphasizes physical conditioning, mental toughness, and
                        sportsmanship values to foster a well-rounded badminton
                        player.
                    </h1>
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default TopSlider;
