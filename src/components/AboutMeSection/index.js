import React from 'react'
import { Button } from '../ButtonElements'
import image from '../../images/NormZwickau-HighResolution.jpg'
import { 
    AboutMeContainer, 
    AboutMeWrapper, 
    AboutMeRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TitleLine, 
    Heading, 
    TextLine, 
    AboutMeBtnWrapper,
    ImgWrapper,
    Img  
} from './AboutMeElements'

const AboutMeSection = () => {
    return (
        <>
            <AboutMeContainer id='aboutme'>
                <AboutMeWrapper>
                    <AboutMeRow>
                        <Column1>
                            <TextWrapper>
                                <TitleLine>
                                   TitleLine
                                </TitleLine>
                                <Heading> Heading </Heading>
                                <TextLine>
                                    Nunquam fallere idoleum.
                                    To the ripe caviar add onion, butter, orange juice and quartered squid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
                                    aperiam architecto, aut autem blanditiis consequatur consequuntur dolor illum minima non quia quidem quisquam repellendus sunt tenetur vel, velit, vero?
                                </TextLine>
                                <AboutMeBtnWrapper>
                                    <Button to='home'>Button</Button>
                                </AboutMeBtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                 <Img src={image}/>
                            </ImgWrapper>
                        </Column2>
                    </AboutMeRow>
                </AboutMeWrapper>
            </AboutMeContainer>
        </>
    )
}

export default AboutMeSection
