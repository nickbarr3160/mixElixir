import styled from 'styled-components'

// Main Wrapper for most pages

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:100vw;
`;
// header for all navigationHam component
export const Header = styled.div`
width:100%;
display:flex;
justify-content:flex-end;
// border:2px solid green;
`


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
@media (max-width:600px)
{

}
`;

export const DrinkResults = styled.div`
display:flex;
width:100%;
height:100%;
padding:1em;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`;

export const GeneratedCont = styled.div`
background-color:${props=>props.bgcolor};
display:flex;
justify-content:space-evenly;
align-items:center;
height:80%; 
width:80%;
color:${props=>props.color};
padding:1em;
box-shadow:0 2px 4px rgb(0 0 0/20%);
@media (max-width:600px)
{
  width:100%;
}
// border:2px solid red;
`;

export const GenerateContent = styled.div `
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
width:100%;
height:80vh;
@media (max-width:600px)
{
  align-items:center;
  padding:10px;
}

`;

export const AddIngredientsColumn = styled.div `
display:flex;
flex-direction:column;
height:100%;
width:50%;
// border:2px solid pink;
`;

export const MappedIngredients = styled.div`
width:70%;
height:70%;
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
// border:2px solid red;
@media (max-width:600px)
{
  padding:5px;
  height:100%;
  width:100%;
}
`;
export const IngredientCont = styled.div`
display:flex;
width:7em;
height:2em;
border-radius:10px;
margin:1em;
justify-content:space-between;
align-items:center;
padding-left:1em;
`;

export const HeroCont = styled.div`
width:100%;
display:flex;
justify-content:space-evenly;
align-items:center;
@media (max-width:600px)
{
  flex-direction:column;
  align-items:center;
}
`;

export const HeroContentCont = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
padding-left:4em;
@media (max-width:600px)
{
  justify-content:center;
  padding:0;
  width:100%;
}
`;

export const IconCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100%;
width:40%;
`;





//Event page styling

export const EventWrapper = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
width:100vw;
`;

export const EventContentCont = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
height:110vh;
width:50%;
`;

export const EventInputContentCont = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
width:50%;
margin-top:2em;
`;

export const EventInput = styled.input`
width:80%;
height:10%;
background-color:#202223;
color:white;
border:none;
padding:1em;
font-family: 'Poppins', sans-serif;
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

//Search Page

export const SearchBarWrapper = styled.div`
display:flex;
height:100px;
width:90%;
justify-content:flex-start;
@media(max-width:600px)
{
  // border:2px solid yellow;
  flex-direction:column;
  height:300px;
}
`;

export const SearchBar = styled.input`
width:30%;
padding:1em;
margin-right:2em;
background-color:#34343450;
border-radius:5px;
border:none;
color:white;
focus:none;
@media(max-width:600px)
{
  flex-direction:column;
}
// width:100px;

`;

export const Heading = styled.h1`
color:${props=>props.color};
`;

export const SubHeading = styled.h4`
color:${props=>props.color};
`;

export const HeadingCont = styled.div `
width:90%;
padding-top:2em;
`;

//PAGINATION CONT
export const PaginationCont = styled.div`
display:flex;
2px solid red;
align-items:center;
justify-content:center;
`;

//Login styling

export const AuthInput = styled.input`
width:100%;
height:7%;
background-color:#202223;
color:white;
border:none;
padding:1em;
font-family: 'Poppins', sans-serif;
`;



export const AuthWrapper = styled.div`
display:flex;
height:100vh;
justify-content:center;
align-items:center;
width:100vw;
`;

export const AuthCont = styled.div`
height:80%;
width:50%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
`;

export const AuthTitleCont = styled.div`
width:100%;
display:flex;
justify-content:space-evenly;
`;

export const AuthTitle = styled.div`
color:#FF3864;;
font-size:80px;
font-weight:bold;
`;

export const AuthLogoCont = styled.div`
display:flex;
height:100%;
width:15%;
`;

export const AuthLogo = styled.img`
height:100%;
width:100%;
`;

export const AuthButton = styled.button`
background-color:#FF3864;
padding:0.8em;
color:white;
border:none;
// font-weight:bold;
`;

export const AuthButtonCont = styled.div`
width:100%;
display:flex;
justify-content:flex-start;
`;

