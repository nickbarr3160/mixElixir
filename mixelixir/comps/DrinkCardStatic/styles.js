import styled from 'styled-components'

export const CardContainer = styled.div`
display:${props=>props.display};
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
color: #fff;
width: 200px;
height: 300px;
background-color: #242424;
border:1px solid black;
border-radius: 5px;
// box-shadow: 2px 2px 5px 1px black;
overflow: hidden;
margin:1em;
@media (max-width: 600px) {
    height:100%;
    flex-direction:row;
    width:90%;
    border:2px solid #FF3864;
    border-radius: 10px;

}
`;

export const ImageContainer = styled.div`
@media (max-width:600px)
{
    padding:10px;
    height:35%;
    width:45%;
}
`
export const DrinkImg = styled.img`
display: flex;
width: 100%;
height:100%;

@media (max-width:600px){
border-radius:10px;
}
`;

export const TextCont = styled.div`
width:100%;
height:30%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;