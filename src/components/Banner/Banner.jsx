import BannerImg from "../../assets/images/pngwing 10.png";
import "./Banner.css";
const Banner = () => {
    return (
        <div className='displayBanner'>
            <div className='bannerInfo'>
                <h1>Let's make beautiful flowers a part of your life.</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <button>Shop Now</button>
            </div>
            <div className='bannerImg'>
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;