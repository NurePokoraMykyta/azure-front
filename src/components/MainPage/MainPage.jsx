import Header from "./Header/Header";
import Underheader from "./Underheader/Underheader";
import MainPart from "./MainPart/MainPart";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";

const MainPage = () => {
    return(
        <div className="MainPage">
            <Header/>
            <MainPart/>
            <Footer/>
            <Outlet />
        </div>
    );
}
export default MainPage;