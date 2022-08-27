import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import badger from '../images/slider-badging.jpg'
import badag from '../images/slider-badag.jpg'
import scale from '../images/slider-scale.jpg'
import scales from '../images/slider-scales.jpg'


const ImgSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

    }

    return(

        <Carousel {...settings}>
            <Wrap>
                <img src={badger} />
            </Wrap>
            <Wrap>
                <img src={badag} />
            </Wrap>
            <Wrap>
                <img src={scale} />
            </Wrap>
            <Wrap>
                <img src={scales} />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    padding-top: 20px;
    

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171)
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }

`

const Wrap = styled.div `
    cursor: pointer;
    img {

        border: 4px solid transparent;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0 16px 10px -10px;
        transition-duration: 300ms;
        
        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);

        }

    }

`