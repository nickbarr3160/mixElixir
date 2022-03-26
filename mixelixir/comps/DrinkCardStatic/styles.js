import styled from 'styled-components'
import {motion} from 'framer-motion'

export const CardContainer = styled(motion.div)`
display:${props=>props.display};
background-image: url(${props=>props.imgSrc});
// background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 78%);
background-position: center;
background-size: cover;
background-repeat:no-repeat;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
color: #fff;
width: 200px;
height: 300px;
border-radius: 5px;
box-shadow: 2px 2px 5px 1px black;
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

export const TagCont = styled.div`
width:100%;
height:20%;
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
box-shadow: 2px 2px 3px 1px #00000050;
border-top-right-radius:3px;
border-bottom-right-radius:3px;
font-weight:bold;
font-size:12px;
padding:0em 1em 0em 1em;
line-height:1;
// filer:blur(50px)
`;

export const ContentCont = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
// background-color:#00000020;
background: linear-gradient(180deg, rgba(255,255,255,0.001) 0%, rgba(0,0,0,0.85) 98%);
justify-content:space-evenly;
align-items:center;
`;

export const Icon = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:0.5em;
`;


export const IconCont = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
width:100%;
`;