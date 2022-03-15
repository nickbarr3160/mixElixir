import styled from "styled-components";
import React from "react";
import { CardContainer, DrinkImg, TextCont } from "./style";

const DrinkCardUI = ({
    onClick=()=>{},
    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50"
})=> {
    return <CardContainer 
                onClick={onClick}
                display={display}>
        <DrinkImg src={imgSrc} />
        <TextCont>
        <h4>
        {name}
        </h4>
        </TextCont>
    </CardContainer>
}

export default DrinkCardUI;