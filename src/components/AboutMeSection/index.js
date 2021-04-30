import React from 'react'
import { Button } from '../ButtonElements'
import image from '../../images/small_size.jpg'
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
                                    TextLine
                                </TextLine>
                                <AboutMeBtnWrapper>
                                    <Button to='home'>Button</Button>
                                </AboutMeBtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={image} alt="Photo1" />
                            </ImgWrapper>
                        </Column2>
                    </AboutMeRow>
                </AboutMeWrapper>
            </AboutMeContainer>
        </>
    )
}

export default AboutMeSection
