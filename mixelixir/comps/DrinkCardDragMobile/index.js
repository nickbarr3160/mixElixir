import styled from "styled-components";
import {React, useEffect, useState} from "react";

import { DrinkTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'

import {AiFillHeart} from 'react-icons/ai'
import { useDrag, useDrop } from 'react-dnd'
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
} from "./style";

export const DrinkDragCardMobile = ({
    onClick=()=>{},
    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50",
    onFavClick=()=>{},
    onCardDrag=()=>{},
    favCol="",
    tag="",
    drinkpos=null,
    item={},
    type="drink"
})=> {
    const {theme} = useTheme();
    const [pos, setPos] = useState(drinkpos || {
        left:0,
        top:0,
        position:'relative'
    })

    

    useEffect(()=>{
        if(type ==='drinkdrop'){
    
          onUpdateDrink({
            pos
          })
        }
      }, [pos])
    
    const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type,
    item,
    end:(item, monitor)=>{
      if(type==='drinkdrop'){
        setPos({
          left:monitor.getClientOffset().x,
          top:monitor.getClientOffset().y,
          position:'absolute'
        })
      }
    },
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      coords: monitor.getClientOffset()
    })
  }))
    
    const sty = {
        left:type==='drinkdrop' ? pos.left:null,
        top:type==='drinkdrop' ? pos.top:null,
        position:type==='drinkdrop' ? pos.position:null,
    }

    if (coords && isDragging) {
        sty.left = coords.x;
        sty.top = coords.y;
        sty.position = 'fixed';
        // console.log('DRAGGINNG')
    }

    return (<Wrapper ref={drag}> 
    <CardContainer 
    onClick={onClick}    
    imgSrc={imgSrc}
    display={display}
    onDrag={onCardDrag}
    ref={dragPreview} {...sty}

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

