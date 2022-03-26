import styled from "styled-components";
import React from "react";
import { CardContainer, DrinkImg, TextCont, TagCont, Tag, IconCont, ContentCont, Icon} from "./styles";
import { DrinkTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'
import {AiFillHeart} from 'react-icons/ai'


// library imports 
import { motion, AnimatePresence } from "framer-motion";


const DrinkCardUIStatic = ({
    onClick=()=>{},
    name="Jake",
    imgSrc="https://placekitten.com/50/50",
    onFavClick=()=>{},
    favCol="",
    tag="",
    iconDisplay="flex"
})=> {
    const {theme} = useTheme();
    return (<> 
    <AnimatePresence 
        
        
        >

    <CardContainer
    whileHover={{scale:1.2}}
    initial={{scale:0}}
    exit={{scale:0.2}}
    animate={{scale:1}}
    transition={{duration:.1, type:'spring', mass:.7}}
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
            <Tag bgcolor='#24242498'>
            {tag}
            </Tag>
        </TagCont>
            <h4 >
            {name}
            </h4>
        </ContentCont>

    </CardContainer>
    </AnimatePresence>
    </>
    )
}

export default DrinkCardUIStatic;