import { Carousel } from 'react-bootstrap';
import CoverImg from "../../assets/images/carouselsImages/cover1.png";
import CoverImg2 from "../../assets/images/carouselsImages/cover2.png";
import CoverImg3 from "../../assets/images/carouselsImages/cover3.png";
import "./Cover.css";
function UncontrolledExample() {
    return (
        <div id='home' className='displayCarousel'>
            {/* Image Slider */}
            <Carousel>
                <Carousel.Item>
                    <img src={CoverImg} alt="" />
                    <Carousel.Caption>
                        <h3>Flowers are like friends; they bring color to your world</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={CoverImg2} alt="" />
                    <Carousel.Caption>
                        <h3>Love is the flower you’ve got to let grow</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={CoverImg3} alt="" />
                    <Carousel.Caption>
                        <h3>In joy or sadness, flowers are our constant friends</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;