import styled from "styled-components";

export const NavCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:15vh;
width:100%;
padding-left:1em;
padding-right:1em;
box-shadow:0 2px 4px rgb(0 0 0/20%);
background-color:${props=>props.bgcolor};
`;

// export const Logo = styled.div`
// font-size:3em;
// margin:1em;
// font-weight:bold;
// font-family: 'Parisienne', cursive;
// color:${props=>props.color};
// &:hover{
// color: ${props=>props.hovColor}; 
// cursor:pointer;
// }
// @media only screen and (max-width: 600px) {
//     margin:0;
//     font-size:2.8em;
//     }
// `;

export const LinkCont = styled.div`

display:flex;
font-size:1.3em;
justify-content:space-around;
align-items:center;
width:60%;
height:100%;
color:${props=>props.color};
// Used to adjust width and font size for mobile screens
@media only screen and (max-width: 500px) {
width:75%;
font-size:1.1em;
}

`;

export const NavLink = styled.div`
&:hover{
    color:${props=>props.color};
}
cursor:pointer;
`;


export const LogoCont = styled.div`
display:flex;
height:80%;
margin:2em;
// border:2px solid red;
width:100px;
@media (max-width:600px)
{
 height:100px;
}

&:hover{
opacity:70%;
}

`;

export const Logo = styled.img`
height:100%;
width:100%;
`;

