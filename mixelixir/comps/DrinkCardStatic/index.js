import styled from "styled-components";
import React from "react";
import { CardContainer, DrinkImg, TextCont, TagCont, Tag, IconCont} from "./styles";
import { DrinkTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'
import {AiFillHeart} from 'react-icons/ai'

const DrinkCardUIStatic = ({
    onClick=()=>{},
    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50",
    onFavClick=()=>{},
    favCol="",
    tag=""
})=> {
    const {theme} = useTheme();
    return (<> 
    <CardContainer 
    onClick={onClick}
    display={display}
    imgSrc={imgSrc}
    >
        <IconCont onClick={onFavClick}>
            <AiFillHeart size="2.5em" color={favCol}/>
        </IconCont>

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
    </>
    )
}

export default DrinkCardUIStatic;