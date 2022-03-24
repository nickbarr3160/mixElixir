import styled from 'styled-components'

export const DrinkWrap = styled.div`
width:100%;
height:100%;
display:flex;
// border:2px solid red;
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
`

export const DrinkInstruct = styled.div`
display:flex;
flex-direction:column;
// border:2px solid red;
display:100%;
`

export const InstructHeading = styled.h3``
export const InstructInfo = styled.div``

export const DrinkImageCont = styled.div`
display:flex;
width:50%;
height:70%;
align-items:flex-start;
// border:2px solid blue;
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
border:2px solid yellow;
// margin-top:10%;
`
