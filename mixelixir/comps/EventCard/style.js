import styled from 'styled-components'

export const EventCardCont = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:flex-start;
background-color:${props=>props.bgcolor};
width:90%;
height:80%;
padding:1em;
margin:2em;
box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px;
border:2px solid yellow;
@media (max-width:600px)
{
    height:500px;
}
`;

export const EventHeading = styled.h1`
font-weight: 500;
font-size: 24px;
margin:0;
color:
${props=>props.color};
@media (max-width:600px)
{
 text-wrap:nowrap;
}
`;

export const Divider = styled.div`
width:90%;

border: 1px solid  #FF3549;
height:0px;
`;

export const EventInput = styled.input`
width:60%;
background-color:black;
color:white;
border:none;
padding:1em;
font-family: 'Poppins', sans-serif;
`;

export const InputCont = styled.div`
display:flex;
justify-content:space-between;
width:70%;
`;

export const EventDescrip = styled.div`
color:${props=>props.color};
@media (max-width:600px)
{
 font-size:14px;
}
`;

export const EventTitleCont = styled.div`
display:flex;
width:80%;
justify-content:space-between;
align-items:center;
`;