import React from 'react'
import { GraphicCont, DrinkImage} from './style'


export const DrinkGraphic = ({
    imgSrc=""
}) => {
  return (
    <GraphicCont>
       <DrinkImage src={imgSrc}/>
    </GraphicCont>
  )
}
