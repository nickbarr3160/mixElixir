import styled from "styled-components";
import {React,useEffect, useState} from "react";
import { CardContainer, DrinkImg, TextCont } from "./style";
import { useDrag, useDrop } from 'react-dnd'

const DrinkCardUI = ({
    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50",
    type='drink',
    drinkpos=null,
    onUpdateDrink=()=>{},
    onCardDrag=()=>{}
})=> {
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
    item: {},
    end:(item, monitor)=>{
      if(type==='drinkdrop'){
        console.log(item, '++++++++++++++++++')
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

    return <div ref={drag}>
            <CardContainer 
            onDrag={onCardDrag}
            display={display}
            ref={dragPreview} {...sty}
            >
            <DrinkImg 
            src={imgSrc} 
            />
            <TextCont
            >
                <h4>
                    {name}
                </h4>
            </TextCont>
        </CardContainer>
    </div>
}

export default DrinkCardUI;