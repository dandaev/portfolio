import React from 'react'

import {
    PortfolioColumn1,
    PortfolioColumn2,
     PortfolioContainer, 
     PortfolioHeading, 
     PortfolioImg, 
     PortfolioImgWrapper, 
     PortfolioRow, 
     PortfolioTextLine, 
     PortfolioTextWrapper, 
     PortfolioTitleLine, 
     PortfolioWrapper} from './PortfolioElements'

const PortfolioSection = () => {
    return (
        <>
            <PortfolioContainer id='portfolio'>
                <PortfolioWrapper>
                    <PortfolioRow>
                        <PortfolioColumn1>
                            <PortfolioTextWrapper>
                                <PortfolioTitleLine>Pooo</PortfolioTitleLine>
                                <PortfolioHeading>Heeeeeeee</PortfolioHeading>
                                <PortfolioTextLine>Teeeeeeeeeext</PortfolioTextLine>
                            </PortfolioTextWrapper>
                        </PortfolioColumn1>
                        <PortfolioColumn2>
                            <PortfolioImgWrapper>
                                <PortfolioImg/>
                            </PortfolioImgWrapper>
                        </PortfolioColumn2>
                    </PortfolioRow>
                </PortfolioWrapper>
            </PortfolioContainer>
        </>
    )
}

export default PortfolioSection
