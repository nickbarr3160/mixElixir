import React from 'react'
import { MyButton } from '../Button'

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
            placeholder='Enter up to 4 ingredients you have!' 
            value={val}
            />
        <AddButt label="add" onClick={onButtClick} > Add </AddButt>
    </InputCont>
)
}
