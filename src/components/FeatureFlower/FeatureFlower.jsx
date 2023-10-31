import { featureData } from "../../data/featureData";
import "./FeatureFlower.css";
const FeatureFlower = () => {
    return (
        <div id="features" className="featureContainer">
            <h2>Our Features Flower</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="featureDiv">
                {
                    featureData.map((each) => {
                        return (
                            <div className="eachFeatures" key={each.img}>
                                <div className="featureImg">
                                    <img src={each.img} alt="" />
                                </div>
                                <p>{each.name}</p>
                                <p className="price">${each.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeatureFlower;