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



export {StyledCard, StyledCards, StyledImg};