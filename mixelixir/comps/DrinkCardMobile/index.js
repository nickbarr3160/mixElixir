import styled from "styled-components";
import React from "react";

import { DrinkTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'

import {AiFillHeart} from 'react-icons/ai'

import { 
    CardContainer, 
    DrinkImg, 
    TextCont, 
    TagCont, 
    Tag, 
    IconCont, 
    ContentCont, 
    Icon,
    Wrapper
} from "./styles";

export const DrinkCardMobile = ({
    onClick=()=>{},
    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50",
    onFavClick=()=>{},
    favCol="",
    tag=""
})=> {
    const {theme} = useTheme();
    return (<Wrapper> 
    <CardContainer 
    display={display}
    imgSrc={imgSrc}
    >

        

        <ContentCont
        onClick={onClick}
        >
        {/* <TagCont>
            <Tag bgcolor={DrinkTheme[theme].bgCol}>
            {tag}
            </Tag>
        </TagCont> */}
            <h4 >
            {name}
            </h4>
        </ContentCont>
    </CardContainer>
        <IconCont>
            <Icon onClick={onFavClick}>
            <AiFillHeart size="1.5em" color={favCol}/>
            </Icon>
        </IconCont>
    </Wrapper>
    )
}

