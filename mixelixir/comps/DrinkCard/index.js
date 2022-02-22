import styled from "styled-components";
import React from "react";
import { CardContainer, DrinkImg, TextCont } from "./style";

const DrinkCardUI = ({

    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50"
})=> {
    return <CardContainer display={display}>
        <DrinkImg src={imgSrc} />
        <TextCont>
        <h2>
        {name}
        </h2>
        </TextCont>
    </CardContainer>
}

export default DrinkCardUI;