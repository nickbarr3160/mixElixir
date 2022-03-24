import React from 'react'
import { ButtCont, MyButt } from './style'
import { ButtonTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider';

export const MyButton = ({
    onClick=()=>{},
    label="generate",
}) => {
  const {theme} = useTheme();
  return (
    <ButtCont bg={ButtonTheme[theme].bgcol} onClick={onClick} >
       {label}
    </ButtCont>
  )
}
