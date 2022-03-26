import styled from 'styled-components'

export const Wrapper = styled.div`
width:40%;
height:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-between;
@media(max-width:600px)
{
    justify-content:space-around;
    width:100%;
}
`
export const Input = styled.input`
width:30%;
background-color:#34343450;
border:none;
color:white;
border-radius:2px;
padding:1em;
@media(max-width:600px)
{
    width:100%;
}
`;

export const SearchFilterContainer = styled.div`
display:flex;
flex-direction:column;
border:2px solid red;

`;

export const Label = styled.label`
color:${props=>props.color};
font-size:18px;
@media(max-width:600px)
{
    width:100%;
}
`;