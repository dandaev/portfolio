import React from 'react'
import {Button} from '../ButtonElements'
import {FaInstagram, FaEnvelope, FaMapPin} from 'react-icons/fa'
import image from '../../images/Portfolio_Transparent_High_Resolution.png'
import {
    AboutMeContainer,
    AboutMeRow,
    Column1,
    Column2,
    TextWrapper,
    TitleLine,
    Heading,
    TextLine,
    AboutMeBtnWrapper,
    ImgWrapper,
    Img, AboutResouce, ContactItemsWrapper, ContactItem, IconWrapp
} from './AboutMeElements'

const AboutMeSection = ({name, greetingText, passesionateText, portfolioText, locationText, location}) => {
    return (
        <>
            <AboutMeContainer id='aboutme'>
                {/*<AboutMeWrapper>*/}
                <AboutMeRow>
                    <Column1>
                        <TextWrapper>
                            <TitleLine>
                                passionierter Coder
                                {/*TODO animate backcolor */}
                            </TitleLine>
                            <Heading> Alybek Dandaev </Heading>
                            <ContactItemsWrapper>
                                <ContactItem>
                                    <FaInstagram style={{margin: "0 1em 0", color: '#B08497'}}/>
                                    <AboutResouce href='https://www.instagram.com/dandaevalybek'
                                                  target='blank'>
                                        dandaevalybek
                                    </AboutResouce>
                                </ContactItem>
                                <ContactItem>
                                    <FaEnvelope style={{margin: "0 1em 0", color: '#C1967D'}}/>
                                    <AboutResouce href='mailto:dandaev.alybek@gmail.com'>
                                        contact@dandaevalybek.com
                                    </AboutResouce>
                                </ContactItem>
                                <ContactItem>
                                    <FaMapPin style={{margin: "0 1em 0", color: '#F23F38'}}/>
                                    <AboutResouce href='https://www.zwickau.de'
                                                  target='blank'>
                                        Zwickau</AboutResouce>, Sachsen, Deutschland
                                </ContactItem>
                            </ContactItemsWrapper>
                            <TextLine> Hey <IconWrapp>👋🏼</IconWrapp>, willkommen auf meiner Website. Ich bin Student an der <AboutResouce
                                href='https://www.fh-zwickau.de/'
                                target='blank'>Westsächsische
                                Hochschule Zwickau.</AboutResouce> Durch zahlreiche Lehrprojekte zur Entwicklung
                                verschiedener Arten von Anwendungen
                                sammelte ich Kenntnisse und Fähigkeiten 💪🏼 sowohl in der Kodierung als auch in der
                                Teamarbeit.</TextLine>
                            {/*<AboutMeBtnWrapper>*/}
                            {/*    <Button to='home'>{portfolioText}</Button>*/}
                            {/*</AboutMeBtnWrapper>*/}
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
