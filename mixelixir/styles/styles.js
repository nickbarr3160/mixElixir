import styled from 'styled-components'

// Main Wrapper for most pages

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:100vw;

`;

// Settings page styling

export const SettingsWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
height:100vh;
width:100vw;
`;

// Landing Page styling
export const LandingWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
height:100%;
width:100vw;
`;

export const DrinkResults = styled.div`
display:flex;
width:100%;
height:100%;
padding:1em;
justify-content:center;
align-items:center;
flex-wrap:wrap;
border:2px solid green;
`;

export const GeneratedCont = styled.div`
background-color:${props=>props.bgcolor};
display:flex;
justify-content:space-evenly;
flex-direction:column;
align-items:center;
height:40%; 
width:40vw;
color:${props=>props.color};
border-radius:10px;
padding:1em;
box-shadow:0 2px 4px rgb(0 0 0/20%);;
`;

export const IngredientCont = styled.div`
display:flex;
width:7em;
height:2em;
border-radius:10px;
margin:1em;
justify-content:space-between;
align-items:center;
// border:2px solid white;
padding-left:1em;
`;

export const HeroCont = styled.div`
width:100%;
height:65vh;
display:flex;
justify-content:space-evenly;
align-items:center;
`;

export const HeroContentCont = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
padding-left:4em;
`;

export const IconCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100%;
width:40%;
`;

export const MappedIngredients = styled.div`
width:70%;
height:70%;
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;

`;

export const GenerateContent = styled.div `
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:flex-start;
width:100%;
height:80vh;
padding-left:4em;
`;

//Event page styling

export const EventWrapper = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
height:100vh;
width:100vw;
`;

export const EventContentCont = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
height:100%;
width:50%;
border:2px solid green;
background:pink;
`;


export const Container = styled.div`
  flex-grow: 1;
  // margin: 0 auto;
  // border:3px solid red;
  left:0;
  padding: 0 12px;
  position: relative;
  width: 100%;
  height: 100%;
  // @media (min-width: 1024px) {
  //   max-width: 100vw;
  // }
  // @media (min-width: 1216px) {
  //   max-width: 1100vw;
  // }
  // @media (min-width: 1408px) {
  //   max-width: 1244px;
  // }
  ${props =>
    props.fluid &&
    css`
    padding: 0;
    margin: 0;
    background: red;
    max-width: 100% !important;
    `}
`