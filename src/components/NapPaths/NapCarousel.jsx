import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import Timer from '../timer';

import Pic1 from "../assets/1.png";
import Pic2 from "../assets/2.png";
import Pic3 from "../assets/3.png";

class NapCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTimer: false,
            selectedHour: 0,
            selectedMinute: 0
        };
    }

    onChange = (index, item) => {
        console.log(`Selected slide index: ${index}`);
    };

    onClickItem = (index, item) => {
        console.log(`Clicked item index: ${index}`);
        let selectedHour = 0;
        let selectedMinute = 0;

        if (index === 0) {
            selectedHour = 0;
            selectedMinute = 15;
        } else if (index === 1) {
            selectedHour = 0;
            selectedMinute = 45;
        } else if (index === 2) {
            selectedHour = 1;
            selectedMinute = 30;
        }

        this.setState({ showTimer: true, selectedHour, selectedMinute });
    };

    onClickThumb = (index, item) => {
        console.log(`Clicked thumbnail index: ${index}`);
        let selectedHour = 0;
        let selectedMinute = 0;

        if (index === 0) {
            selectedHour = 0;
            selectedMinute = 15;
        } else if (index === 1) {
            selectedHour = 0;
            selectedMinute = 45;
        } else if (index === 2) {
            selectedHour = 1;
            selectedMinute = 30;
        }

        this.setState({ showTimer: true, selectedHour, selectedMinute });
    };

    render() {
        const { showTimer, selectedHour, selectedMinute } = this.state;

        return (
            <div>
                <Carousel
                    showArrows={true}
                    onChange={this.onChange}
                    onClickItem={this.onClickItem}
                    // onClickThumb={this.onClickThumb}
                >
                    <div className='font relative'>
                        <h1 className='font-bold text-2xl my-6 text-white'>Power Nap (15 Minutes)</h1>
                        <img src={Pic2} alt="Slide 1" className='w-10 object-left-bottom' />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl my-6 text-white'>Nasa Nap (45 Minutes)</h1>
                        <img src={Pic3} alt="Slide 2" />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl my-6 text-white'>Revive Cycle Nap (90 Minutes)</h1>
                        <img src={Pic1} alt="Slide 3" />
                    </div>
                </Carousel>

                {showTimer && (
                    <Timer startHour={selectedHour} startMinute={selectedMinute} />
                )}
            </div>
        );
    }
}

export default NapCarousel;
