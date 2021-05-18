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

const AboutMeSection = ({name,greetingText,passesionateText,portfolioText,locationText, location}) => {
    return (
        <>
            <AboutMeContainer id='aboutme'>
                {/*<AboutMeWrapper>*/}
                    <AboutMeRow >
                        <Column1>
                            <TextWrapper>
                                {/*<TitleLine>*/}
                                {/*   TitleLine*/}
                                {/*</TitleLine>*/}
                                <Heading> {name} </Heading>
                                <TextLine> {passesionateText} </TextLine>
                                <TextLine> {greetingText} </TextLine>
                                <TextLine> {locationText}  {location}</TextLine>
                                <AboutMeBtnWrapper>
                                    <Button to='home'>{portfolioText}</Button>
                                </AboutMeBtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                 <Img src={image}/>
                            </ImgWrapper>
                        </Column2>
                    </AboutMeRow>
                {/*</AboutMeWrapper>*/}
            </AboutMeContainer>
        </>
    )
}

export default AboutMeSection
