import React from 'react'

// styled component imports
import { 
    InputCont,
    InputField,
    AddButt 
} from './styles'

export const Input = ({
onValChange=()=>{},
onButtClick=()=>{},
val
}) => {
return (
    <InputCont>
        <InputField 
            onChange={onValChange} 
            placeholder='add upto 4 ingredients' 
            value={val}
            />
        <AddButt onClick={onButtClick} > Add Item </AddButt>
    </InputCont>
)
}
