import React from 'react'

import { ButtCont, MyButt } from './style'

export const MyButton = ({
    onClick=()=>{}
}) => {
  return (
    <ButtCont onClick={onClick} >
        Generate!
    </ButtCont>
  )
}
