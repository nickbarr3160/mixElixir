import styled from "styled-components";

export const HeroMessageCont = styled.div`
display:flex;
height:100%;
width:100%;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
@media (max-width:600px)
{
    width:90%;
}
`;

export const HeroHeading = styled.h1`
color:${props=>props.color};
font-size:60px;
@media (max-width: 600px) {
    font-size:40px;
    text-align:center;
}
`;

export const HeroWelcomeText = styled.div`
font-size:18px;
width:100%;
color:${props=>props.color};
@media (max-width: 600px) {
    text-align:center;

`;