import { allFlowers } from "../../data/flowersData";
import "./Flowers.css";
const Flowers = () => {
    return (
        <div id="flowers" className="flowerContainer">
            <h2>Today’s Availabe Flowers</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="flowerDiv">
                {
                    allFlowers.map((each) => {
                        return (
                            <div className='displayFlower' key={each.img}>
                                <div className='eachImg'>
                                    <img src={each?.img} alt="" />
                                </div>
                                <p>{each?.name}</p>
                                <p className="price">${each?.price}</p>
                            </div>
                        )
                    })
                }
            </div>
            <button>See More</button>
        </div>
    );
};

export default Flowers;