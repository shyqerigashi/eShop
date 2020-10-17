import React from 'react'
import Slider from "react-slick";

//Components

//styles
import './Home.scss'

import banner1 from './../../assets/images/banner-1.jpg';
import banner2 from './../../assets/images/home_banner.jpg';

const settings = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export const Home = () => {
    return (
        <div className="Home">
            <section className="block_section banner_section">
                <Slider {...settings}>
                    <div className="banner">
                        <img src={banner1} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Sale of the summer collection</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner2} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Sale of the spring collection</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner1} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Sale of the winter collection</h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    )
}
