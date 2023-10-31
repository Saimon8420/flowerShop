import "./Footer.css";
import apple from "../../assets/images/icons/apple 1.svg";
import facebook from "../../assets/images/icons/facebook 1.svg";
import youtube from "../../assets/images/icons/Group 49.svg";
import instagram from "../../assets/images/icons/instagram 1.svg";
import linkedin from "../../assets/images/icons/linkedin 1.svg";
import twitter from "../../assets/images/icons/twitter 1.svg";
const Footer = () => {
    return (
        <div id='contacts' className='footerContainer'>
            <div className="logo">
                <h2>Flower<span>Shop</span></h2>
            </div>
            <div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className='subscribe'>
                <p>For latest news and offer, Subscribe Us</p>
                <div className='input'>
                    <input type="email" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="socialIcons">
                <img src={apple} alt="" />
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
            </div>
            <div className="bottomNav">
                <span>Send Flowers</span>
                <span>What We Do</span>
                <span>Gallery</span>
                <span>Contacts</span>
            </div>
        </div>
    );
};

export default Footer;