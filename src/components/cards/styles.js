import styled from "styled-components";

const StyledCard = styled.div `
    position: relative;
    background-image: url('/images/bg-main-desktop.png');
    width: 483px;
    height: 900px;
`;
const StyledCards = styled.div `
    position: relative;
    width: 541px;
    height: 527px;
    top: 180px;
    left: 200px;
`;
const StyledImg = styled.img `
    position: absolute;
    bottom: 0;
    right: 0;
`;
const StyleCardNumber = styled.p`
    position: absolute;
    height: 36px;
    left: 50px;
    top: 100px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 3.42222px;
    color: #FFFFFF;
`;
const StyleCardNumber2 = styled.p`
    position: absolute;
    height: 18px;
    left: 50px;
    right: 63.98%;
    top: 170px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
`;
const StyleCardNumber3 = styled.p`
    position: absolute;
    height: 50px;
    left: 340px;
    top: 170px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
`;
const StyledCvc = styled.p`
    position: absolute;
    height: 18px;
    left: 450px;
    top: 380px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
`;


export {StyledCard, StyledCards, StyledImg, StyleCardNumber, StyleCardNumber2, StyleCardNumber3, StyledCvc};