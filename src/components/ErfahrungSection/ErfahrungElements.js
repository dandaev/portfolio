import styled from 'styled-components'

export const ErfahrungContainer = styled.div`
    color: #fff;
    background:  #515151;
    height: 900px;

    @media screen and (max-width: 768px){
        padding:100px 0;
    }
`;
export const ErfahrungWrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 100vw;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;
export const TESTER = styled.h1`
    margin-top: 400px;
    color: #f1f1f1;
`;
export const Svg = styled.svg`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    
`;