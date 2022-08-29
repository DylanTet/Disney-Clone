import React from "react";
import styled from "styled-components";
import playButton from '../../images/play-icon-black.png'
import trailerButton from '../../images/play-icon-white.png'
import group from '../../images/group-icon.png' 

const Detail = () => {

    return (

        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
            </Background>
            <Title>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
            </Title>
            <Controls>

                <PlayButton>
                    <img src={playButton} />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src={trailerButton} />
                    <span>TRAILER</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupButton>
                    <img src={group} />
                </GroupButton>

            </Controls>
            <Subtitle>
                2018 · 7m · Family, Fantasy, Kids, Animation
            </Subtitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div `

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`

const Background = styled.div`

    position: fixed;
    top: 0;
    botton: 0;
    right: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;

    }

`

const Title = styled.div`

    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 6rem;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

`

const Controls = styled.div`

    display: flex;
    align-items: center;
    margin: 40px 60px;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    margin-right: 24px;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: 250ms;


    &:hover {
        background: rgb(198, 198, 198) 
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: 1px solid white;
    transition: 250ms;

`

const AddButton = styled.button`

    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    cursor: pointer;
    margin-right: 16px;
    
    span {
        font-size: 30px;
        color: white;
        padding-bottom: 3px;

    }
`

const GroupButton = styled(AddButton)`

`

const Subtitle = styled.div`
   
    margin-top: 26px;
    font-size: 15px;
    min-height: 20px;
    padding: 0 3.7rem;

`

const Description = styled.div`
    font-size: 20px;
    padding: 0 3.7rem;
    margin-top: 1rem;


`

