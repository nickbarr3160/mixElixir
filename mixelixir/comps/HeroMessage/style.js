import styled from "styled-components";

export const HeroMessageCont = styled.div`
display:flex;
height:100%;
width:100%;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
`;

export const HeroHeading = styled.h1`
color:${props=>props.color};
font-size:60px;
`;

export const HeroWelcomeText = styled.div`
font-size:18px;
color:${props=>props.color};
`;