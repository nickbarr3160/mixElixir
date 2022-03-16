import styled from "styled-components";
import React from "react";
import { CardContainer, DrinkImg, TextCont, ImageContainer } from "./styles";

const DrinkCardUIStatic = ({
    onClick=()=>{},
    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50"
})=> {
    return <CardContainer 
                onClick={onClick}
                display={display}>
        <ImageContainer>
            <DrinkImg src={imgSrc} />

        </ImageContainer>
        <TextCont>
        <h4>
        {name}
        </h4>
        </TextCont>
    </CardContainer>
}

export default DrinkCardUIStatic;