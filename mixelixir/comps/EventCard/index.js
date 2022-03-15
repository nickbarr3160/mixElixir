import React from 'react'
import { EventCardCont, EventHeading, Divider, EventInput, InputCont, EventDescrip} from './style'
import { MyButton } from '../Button'

export const EventCard = ({
   event="Wedding Party",
   onInputChange=()=>{},
   onButtClick=()=>{},
   descrip=""
}) => {
  return (
    <EventCardCont>
        <EventHeading>{event}</EventHeading>
        <Divider/>
        <InputCont>
            <EventInput type='text' onChange={onInputChange}/>
            <MyButton onClick={onButtClick}label="post"/>
        </InputCont>
        <EventDescrip>{descrip}</EventDescrip>
    </EventCardCont>
  )
}
