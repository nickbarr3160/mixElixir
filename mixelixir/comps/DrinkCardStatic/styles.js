import styled from 'styled-components'

export const CardContainer = styled.div`
display:${props=>props.display};
background-image: url(${props=>props.imgSrc});
// background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 78%);
background-position: center;
background-size: cover;
background-repeat:no-repeat;
flex-direction: column;
justify-content: flex-end;
align-items: center;
text-align: center;
color: #fff;
width: 200px;
height: 300px;
border-radius: 5px;
box-shadow: 2px 2px 5px 1px black;
overflow: hidden;
margin:1em;
`;

export const TagCont = styled.div`
width:100%;
height:15%;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;

`;

export const Tag = styled.div`
width:50%;
height:80%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
background-color:${props=>props.bgcolor};
box-shadow: 2px 2px 5px 1px black;
border-top-right-radius:25px;
border-bottom-right-radius:25px;
font-weight:bold;
font-size:12px;
`;

export const TextCont = styled.div`
width:100%;
height:30%;
display:flex;
// background-color:#00000020;
background: linear-gradient(180deg, rgba(255,255,255,0.001) 0%, rgba(0,0,0,0.85) 78%);
flex-direction:row;
justify-content:center;
align-items:center;
`;