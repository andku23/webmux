import React, { Component } from 'react';
import '../Pages/App.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Header, Image } from 'semantic-ui-react';
import Slider from "react-slick";

import pic1 from '../Images/1.jpg';
import pic2 from '../Images/2.jpg';

/*
    Name: BackgroundSlides
    Description: This just wraps the react-slick
    carousel and also hides the bottom since we had
    a problem there.

 */

class BackgroundSlides extends Component {
    render() {
        const settings = {
            dots: false,
            dotsClass:'App-dots',
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade:true
        };

        return (
            <div>
                <Slider {...settings} className = "App-slider">
                    <div>
                        <Image src = {pic1} fluid className = "App-slider-images"/>
                    </div>
                    <div>
                        <Image src = {pic2} fluid className = "App-slider-images"/>
                    </div>
                    <div>
                        <Image src = {pic2} fluid className = "App-slider-images"/>
                    </div>
                </Slider>
                <div className = "App-dothider">

                </div>
            </div>
        );
    }
}

export default BackgroundSlides;