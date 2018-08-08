import React, { Component } from 'react';
import '../Pages/App.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Header, Image } from 'semantic-ui-react';
import Slider from "react-slick";

import pic1 from '../Images/1.jpg';
import pic2 from '../Images/2.jpg';

class BackgroundSlides extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Slider {...settings}>
                <div>
                    <Image src = {pic1}/>
                </div>
                <div>
                    <Image src = {pic2}/>
                </div>
            </Slider>
        );
    }
}

export default BackgroundSlides;