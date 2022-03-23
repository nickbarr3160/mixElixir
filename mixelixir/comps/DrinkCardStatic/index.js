import styled from "styled-components";
import React from "react";
import { CardContainer, DrinkImg, TextCont, TagCont, Tag} from "./styles";
import { DrinkTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'

const DrinkCardUIStatic = ({
    onClick=()=>{},
    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50",
    onFavClick=()=>{},
    tag=""
})=> {
    const {theme} = useTheme();
    return (<> 
    <CardContainer 
    onClick={onClick}
    display={display}
    imgSrc={imgSrc}
    >
        <TagCont>
            <Tag bgcolor={DrinkTheme[theme].bgCol}>
            {tag}
            </Tag>
        </TagCont>

        <TextCont>
            <h4 >
            {name}
            </h4>
        </TextCont>

    </CardContainer>
    <button onClick={onFavClick} >add to favs</button>

    </>
    )
}

export default DrinkCardUIStatic;