import "./MainPart.css"

import advertisment from "../../../images/mainpage/advertisment.jpg";
import welcomeUpperLeft from "../../../images/mainpage/welcome_upper_left.jpg";
import welcomeDownLeft from "../../../images/mainpage/welcome_down_left.png";
import welcomeUpperRight from "../../../images/mainpage/welcome_upper_right.png";
import welcomeDownRight from "../../../images/mainpage/welcome_down_right.png"
import {Outlet} from "react-router-dom";

const MainPart = () => {
    return (
        <div className="MainPart">
            <div className="advertisement"><img src={advertisment} alt=""/></div>
            <div className="welcome">
                <div className="welcome_left_block">
                    <img className="welcomeUpperLeft" src={welcomeUpperLeft} alt=""/>
                    <img className="welcomeDownLeft" src={welcomeDownLeft} alt=""/>
                </div>
                <div className="welcome_center_block">
                    <div className="upper_text">Назва сайту<br/>Фільмотека</div>
                    <br/>
                    <div className="line"></div>
                    <br/>
                    <div className="bottom_text">бла бла бла бла бла
                        <br/>якась тут фігня
                        <br/>я не придумав
                        <br/>в дс потім придумаємо
                    </div>
                </div>
                <div className="welcome_right_block">
                    <img className="welcomeUpperRight" src={welcomeUpperRight} alt=""/>
                    <img className="welcomeDownRight" src={welcomeDownRight} alt=""/>
                </div>
            </div>
            <div className="advertisement"><img src={advertisment} alt=""/></div>
        </div>
    );
}
export default MainPart;