import styled from 'styled-components'

export const CardContainer = styled.div`
display:${props=>props.display};
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
color: #fff;
width: 10vw;
height: 30vh;
background-color: #FF7259;
border-radius: 15px;
box-shadow: 2px 2px 5px 1px black;
overflow: hidden;
margin:1em;
`;

export const DrinkImg = styled.img`
display: flex;
width: 100%;
height:70%;
`;

export const TextCont = styled.div`
width:100%;
height:30%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;