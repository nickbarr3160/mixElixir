import styled from "styled-components";
import React,{useState,useEffect} from "react";
import { CardContainer, DrinkImg, TextCont, ImageContainer } from "./styles";

const DrinkCardUIStatic = ({
    onClick=()=>{},
    name="Jake",
    display="flex",
    imgSrc="https://placekitten.com/50/50",
    onFavClick=()=>{},
})=> {

    // state to keep track of current screen size
    const [sWidth, setSwidth] = useState()


useEffect(()=>{
    window.onload=()=>{setSwidth(window.innerWidth)}
    window.onresize=()=>{setSwidth(window.innerWidth)}
    setSwidth(window.innerWidth)

       // detecting when the screen resizes
},[sWidth])

    return (<> 
            <CardContainer 
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
        <button onClick={onFavClick} >add to favs</button>

    </>
    )
}

export default DrinkCardUIStatic;