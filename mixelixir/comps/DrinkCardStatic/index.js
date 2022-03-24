import styled from "styled-components";
import React from "react";
import { CardContainer, DrinkImg, TextCont, TagCont, Tag, IconCont, ContentCont, Icon} from "./styles";
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
    display={display}
    imgSrc={imgSrc}
    >

        <IconCont>
            <Icon onClick={onFavClick}>
            <AiFillHeart size="2em" color={favCol}/>
            </Icon>
        </IconCont>

        <ContentCont
        onClick={onClick}
        >
        <TagCont>
            <Tag bgcolor={DrinkTheme[theme].bgCol}>
            {tag}
            </Tag>
        </TagCont>
            <h4 >
            {name}
            </h4>
        </ContentCont>

    </CardContainer>
    </>
    )
}

export default DrinkCardUIStatic;