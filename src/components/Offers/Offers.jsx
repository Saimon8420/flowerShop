import "./Offer.css";
import OfferImg from "../../assets/images/pngwing 8.png"
import CountdownTimer from "./CountDown";
const Offers = () => {
    return (
        <div id="offers" className="offerContainer">
            <div className="offerInfo">
                <h2 className="special">Hurry Up</h2>
                <h2>Hot Deal ! Sale Up To 25% <span>Off</span></h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                {/* CountDown Timer*/}
                <CountdownTimer />
                <button>Shop Now</button>
            </div>
            <div className="offerImg">
                <img src={OfferImg} alt="" />
            </div>
        </div>
    );
};

export default Offers;