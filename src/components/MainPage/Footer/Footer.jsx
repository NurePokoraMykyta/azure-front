import "./Footer.css"
import logoImg from "../../../images/mainpage/logo.png";
import twitterImg from "../../../images/mainpage/twitter.png";
import facebookImg from "../../../images/mainpage/facebook.png";
import tiktokImg from "../../../images/mainpage/tiktok.png";
import instagramImg from "../../../images/mainpage/instagram.png";
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logoImg} alt="Логотип"/>
                </div>
                <div className="footer-info">
                    <p>&copy; 2024 Ваша компанія. Всі права захищено.</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#"><img src={twitterImg} alt=""/></a></li>
                        <li><a href="#"><img src={facebookImg} alt=""/></a></li>
                        <li><a href="#"><img src={tiktokImg} alt=""/></a></li>
                        <li><a href="#"><img src={instagramImg} alt=""/></a></li>
                    </ul>
                </div>
            </div>

        </footer>

);
}
export default Footer;