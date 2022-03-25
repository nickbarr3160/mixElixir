import React from 'react'
import { EventCardCont, EventHeading, Divider, EventInput, InputCont, EventDescrip, EventTitleCont} from './style'
import { MyButton } from '../Button'
import { EventTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider';

export const EventCard = ({
   event="Wedding Party Menu",
   onInputChange=()=>{},
   onButtClick=()=>{},
   descrip=""
}) => {
  const {theme} = useTheme();
  return (
    <EventCardCont bgcolor={EventTheme[theme].cardbgcol}>
        
        <EventTitleCont>
          <EventHeading color={EventTheme[theme].heading}>{event}</EventHeading>
          <EventDescrip color={EventTheme[theme].userCol}>posted by karenhill007</EventDescrip>
        </EventTitleCont>
        
        <Divider/>  
          
          <EventDescrip color={EventTheme[theme].bodyText}>I am planning a wedding and am seeking the perfect beverage combinations to serve to my 200 guests!</EventDescrip>
          <EventDescrip color={EventTheme[theme].bodyText}>I am inquiring if anyone has any ideas please let me know and post a suggestion below! You can also drag your drink ideas below the menu. P.S. No ginger as there are allergies!</EventDescrip>
        
        <InputCont>
            <EventInput placeholder="post a drink!" type='text' onChange={onInputChange}/>
            <MyButton height="100%" onClick={onButtClick}label="post"/>
        </InputCont>

        <EventDescrip  color={EventTheme[theme].bodyText}>{descrip}</EventDescrip>
    </EventCardCont>
  )
}
