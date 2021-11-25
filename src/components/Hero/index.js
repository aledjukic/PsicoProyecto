import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElements'

const Hero = ({open}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1> Introduzca titulo aqui </HeroH1>
                <HeroP> bla bla bla bla bla bla bla bla bla bla </HeroP>
                <HeroBtnWrapper>
                   <Button to="/signup" onClick={open} onMouseEnter = {onHover} onMouseLeave={onHover}>
                       Get Started {hover ? <ArrowForward/> : <ArrowRight />}
                   </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

