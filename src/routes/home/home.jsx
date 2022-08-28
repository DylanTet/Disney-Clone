import React from "react";
import styled from "styled-components";
import ImgSlider from "../../components/img-slider";
import Movies from "../../components/movies";
import Viewers from "../../components/viewers";
import homeImage from '../../images/home-background.png'

const Home = () => {

    return (

        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home;

const Container = styled.main `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url(${homeImage}) center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
`