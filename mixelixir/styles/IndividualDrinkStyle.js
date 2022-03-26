import styled from 'styled-components'

export const DrinkWrap = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-around;
@media (max-width: 600px) {
    flex-direction:column;
    align-items:center;
    height:100%;

}
` 

export const DrinkInfo = styled.div`
height:100%;
width:25%;
display:flex;
flex-direction:column;
@media (max-width: 600px) {
    width:90%;
    // border:2px solid blue;
    
}
`

export const DrinkHeading = styled.h1`
color:${props=>props.color};
`

export const DrinkInstruct = styled.div`
display:flex;
flex-direction:column;
display:100%;
`

export const InstructHeading = styled.h3`
color:${props=>props.color};
`
export const InstructInfo = styled.div`
color:${props=>props.color};`

export const DrinkImageCont = styled.div`
display:flex;
width:40%;
height:60%;
align-items:flex-start;
border:2px solid blue;
@media (max-width: 600px) {
    order:-1;
    width:90%;
    // height:100%;
}

`
export const DrinkImage = styled.img`
object-fit:contain;
width:100%;
height:100%;
`
export const Suggestions = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
height:100%;
// margin-top:10%;
@media(max-width:600px)
{
    width:90%;
}
`
