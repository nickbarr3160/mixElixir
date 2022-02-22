import React from 'react'
import GrClose from 'react-icons/gr'

import { 
  ListWrapper, 
  ListItem,
  IngName,
  DeleteIcon
} from './styles'

// const defaultData = [
//   '0','1','2','3'
// ]

export const IngredientList = ({
  items, 
  ingredients =[]
}) => {

  return (
    <ListWrapper>
      {items}
    </ListWrapper>
  )
}
