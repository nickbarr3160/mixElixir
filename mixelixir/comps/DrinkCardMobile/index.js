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
    Wrapper,
    ImageContainer,
    Image,
    Name
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
        onClick={onClick}

    imgSrc={imgSrc}
    display={display}

    >

        
    <ImageContainer>
        <Image src={imgSrc}/>
    </ImageContainer>
        <ContentCont
        >
        {/* <TagCont>
            <Tag bgcolor={DrinkTheme[theme].bgCol}>
            {tag}
            </Tag>
        </TagCont> */}
        
        </ContentCont>
        <TagCont>
            <Name >
            {name}
            </Name>

        </TagCont>
    </CardContainer>
        <IconCont>
            <Icon onClick={onFavClick}>
            <AiFillHeart size="1.5em" color={favCol}/>
            </Icon>
        </IconCont>
    </Wrapper>
    )
}

