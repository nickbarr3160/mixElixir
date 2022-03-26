import styled from 'styled-components'


export const Wrapper = styled.div`
display:flex;
width:100%;
margin-bottom:1em;
`


export const CardContainer = styled.div`
display:${props=>props.display};
// background-image: url(${props=>props.imgSrc});
background-size:cover;
margin:5px;
color: #fff;
background-repeat:no-repeat;
height:100%;
flex-direction:row;
width:100%;
border:.5px solid #FF3864;
border-radius: 5px;
justify-content:space-around;
align-items:center;
position:relative;
`;

export const ImageContainer = styled.div`
padding:5px;
height:100px;
width:100px;

`
export const Image= styled.img`
object-fit:contain;
height:100%;
width:100%;
border-radius:5px;
`
export const TagCont = styled.div`
width:60%;
height:20%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`;

export const Tag = styled.div`
width:60%;
height:80%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
background-color:${props=>props.bgcolor};
box-shadow: 2px 2px 3px 1px #00000050;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
font-weight:bold;
font-size:12px;
padding:0em 1em 0em 1em;
line-height:1;
`;

export const ContentCont = styled.div`
width:100%;
height:100px;
display:flex;
position:absolute;
z-index:-1;
flex-direction:column;
// background-color:#00000020;
background: linear-gradient(180deg, rgba(255,255,255,0.001) 0%, rgba(0,0,0,0.85) 98%);
justify-content:space-evenly;
align-items:center;
border-radius:5px;
`;

export const Icon = styled.div`
display:flex;
justify-content:center;
align-items:center;
// padding:0.2em;
`;


export const IconCont = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
width:10%;
color:white;
`;

export const Name = styled.div`
font-size:17px;
font-weight:800;
tex-align:center;
`