import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

import Pic1 from "../assets/1.png";
import Pic2 from "../assets/2.png";
import Pic3 from "../assets/3.png";

class NapCarousel extends React.Component {
    // Optional event handlers, you can implement them or remove if not needed
    onChange = (index, item) => {
        console.log(`Selected slide index: ${index}`);
    };

    onClickItem = (index, item) => {
        console.log(`Clicked item index: ${index}`);
    };

    onClickThumb = (index, item) => {
        console.log(`Clicked thumbnail index: ${index}`);
    };

    render() {
        return (
            <Carousel
                showArrows={true}
                onChange={this.onChange}
                onClickItem={this.onClickItem}
                onClickThumb={this.onClickThumb}
            >
                <div className='font relative'>
                    <h1 className='font-bold text-2xl my-6'>Power Nap (15 Minutes)</h1>
                    <img src={Pic2} alt="Slide 1" className='w-10 object-left-bottom' />
                    
                </div>
                <div>
                    <h1 className='font-bold text-2xl my-6'>Nasa Nap (45 Minutes)</h1>
                    <img src={Pic3} alt="Slide 2" />
                    
                </div>
                <div>
                    <h1 className='font-bold text-2xl my-6'>Revive Cycle Nap (90 Minutes)</h1>
                    <img src={Pic1} alt="Slide 3" />
                    
                </div>
                
            </Carousel>
        );
    }
}


export default NapCarousel;