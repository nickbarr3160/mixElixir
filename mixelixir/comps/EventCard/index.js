import React from 'react'
import { EventCardCont, EventHeading, Divider, EventInput, InputCont, EventDescrip} from './style'
import { MyButton } from '../Button'
import { EventTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider';

export const EventCard = ({
   event="Wedding Party",
   onInputChange=()=>{},
   onButtClick=()=>{},
   descrip=""
}) => {
  const {theme} = useTheme();
  return (
    <EventCardCont bgcolor={EventTheme[theme].cardbgcol}>
        <EventHeading color={EventTheme[theme].heading}>{event}</EventHeading>
        <Divider/>
        <InputCont>
            <EventInput type='text' onChange={onInputChange}/>
            <MyButton onClick={onButtClick}label="post"/>
        </InputCont>
        <EventDescrip>{descrip}</EventDescrip>
    </EventCardCont>
  )
}
