import React from 'react'

import { ButtCont, MyButt } from './style'

export const MyButton = ({
    onClick=()=>{},
    label="generate"
}) => {
  return (
    <ButtCont onClick={onClick} >
       {label}
    </ButtCont>
  )
}
