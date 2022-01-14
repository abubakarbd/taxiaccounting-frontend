import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banar2 from '../../img/2.jpg';
import banar3 from '../../img/Bookkeeping cover.jpg';
import banar1 from '../../img/london-taxi-getty.jpg';
import banar4 from '../../img/Taxi Rain.jpg';
function HeaderSlider() {
    

    return (
        <div className="w-full">
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            transitionTime={1000}
            useKeyboardArrows={true}
            showArrows={true}
            showThumbs={false}
            >
                <div>
                    <img src={banar1} className='h-96' alt=""  />
                </div>
                <div>
                    <img src={banar2} className='h-96' alt=""  />
                </div>
                <div>
                    <img src={banar3} className='h-96' alt=""  />
                </div>
                <div>
                    <img src={banar4} className='h-96' alt=""  />
                </div>
              
            </Carousel>
        </div>
    );
}

export default HeaderSlider;