import styled from 'styled-components'
import { motion } from 'framer-motion';

export const MainWrapper = styled.div`
display:flex;
flex-direction:row;
border:1px solid yellow;
width:100%;
height:100%;

@media (max-width:600px)
{
    flex-direction:column;
    height:400px;
}
`

export const Wrapper = styled.div`
width:40%;
height:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-between;
@media(max-width:600px)
{
    order:1;
    justify-content:space-around;
    width:100%;

}
`

export const SubHeading = styled.div`
color:${props=>props.color};
font-size:20px;
@media(max-width:600px)
{
 font-size:18px;
}
`;


export const SearchBar = styled(motion.input)`
width:50%;
transition:all .5s;
padding:1em;
background-color:#34343450;
border-radius:5px;
border:none;
color:white;
focus:none;
// width:100px;
@media(max-width:600px)
{
    width:100%;
}
`;




export const WrapperTwo = styled.div`
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