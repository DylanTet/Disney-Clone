import React from "react";
import styled from "styled-components";
import inside from '../images/viewers-marvel.png'

const Movies = () => {

    return (

        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src={inside}/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div`

    


`

const Content = styled.div`

    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;

`

const Wrap = styled.div`

    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    height: 200px;
    width: 310px;

    &:hover {
        border-color: rgba(249, 249, 249, 0.8);
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
    }


    img {
        height: 100%;
        width: 100%;
        object-fit: cover;


    }



`