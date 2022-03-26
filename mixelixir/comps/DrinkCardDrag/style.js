import styled from 'styled-components'

export const CardContainer = styled.div`
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
${({position, left, top})=>(position === 'fixed' || position === 'absolute') && `
  left:${left}px;
  top:${top}px;
  position:${position};
`}
`;

export const TagCont = styled.div`
width:100%;
height:70%;
display:flex;
justify-content:flex-start;
align-items:center;
`;

export const Tag = styled.div`
width:50%;
height:20%;
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

export const IconCont = styled.div`
display:flex;
justify-content:flex-end;
padding:1em;
align-items:center;
width:100%;
`;