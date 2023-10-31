import "./Contact.css";
import image1 from "../../assets/images/contact/Group 57.png";
import image2 from "../../assets/images/contact/Group 58.png";
import image3 from "../../assets/images/contact/Group 59.png";
const Contact = () => {
    return (
        <div className="contactDiv">
            <div className="each">
                <img src={image1} alt="" />
                <p>Same Day Delivery. Click & Collect.</p>
            </div>
            <div className="each">
                <img src={image2} alt="" />
                <p>Fresh Flowers. Local Growers.</p>
            </div>
            <div className="each">
                <img src={image3} alt="" />
                <p>24/7 supports</p>
            </div>
        </div>
    );
};

export default Contact;