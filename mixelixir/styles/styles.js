import styled from 'styled-components'

// Main Wrapper for most pages

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
height:100vh;
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

export const DrinkResults = styled.div`
display:flex;
width:90%;
height:40%;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`;

export const GeneratedCont = styled.div`
background-color:black;
display:flex;
justify-content:space-evenly;
flex-direction:column;
align-items:center;
height:40vh; 
width:50vw;
color:white;
border-radius:10px;
`;

export const IngredientCont = styled.div`
display:flex;
width:10em;
height:2em;
background-color:#2E2B26;
border-radius:10px;
justify-content:space-evenly;
align-items:center;
border:2px solid #FF3864;
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