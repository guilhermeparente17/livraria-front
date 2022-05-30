import React from 'react'
import { Link } from 'react-router-dom';
import Video from '../../assets/videos/library.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    HeroButton
} from './InitialPage.Elements'

const InitialPage = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Cadastre livros e tenha uma coleção de livros ao seu gosto!</HeroH1>
                <HeroP>
                    Tenha sua lista preferida de livros de todos os gostos e compartilhe com seus amigos.
                </HeroP>
                <Link to="/livros"><HeroButton>Comece agora</HeroButton></Link>
                <HeroBtnWrapper>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default InitialPage