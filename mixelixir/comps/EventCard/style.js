import styled from 'styled-components'

export const EventCardCont = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:flex-start;
background-color:${props=>props.bgcolor};
width:80%;
height:40%;
border-radius:10px;
padding:1em;
box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px;
`;

export const EventHeading = styled.h1`
font-weight: 500;
font-size: 24px;
margin:0;
color:
${props=>props.color};
`;

export const Divider = styled.div`
width:90%;
background-color:#F39C6B;
border: 1px solid #FF7259;
height:0px;
`;

export const EventInput = styled.input`
`;

export const InputCont = styled.div`
display:flex;
justify-content:space-evenly;
width:50%;

`;

export const EventDescrip = styled.div`

`;
