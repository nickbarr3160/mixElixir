import React from 'react'

// custom hook and variables
import { useSearch, useTheme } from '@/utils/provider';
import { HeaderTheme, SubHeaderTheme,search_types,SearchFilterTheme } from "@/utils/variables";



// styled components import 
import { 
    MainWrapper,
    Wrapper, 
    SubHeading, 
    SearchBar,
    // ======
    Input, 
    SearchFilterContainer, 
    Label, 
    WrapperTwo

} from './styles'

export const SearchBarInput = (
    {
        onChange = (e)=>{},
        search,
        onSearch=()=>{}

    }
) => {
    const {theme,setTheme} = useTheme()

    const searchTypes= search_types

    let types= []

    for (const [value]of Object.entries(searchTypes)){
        types.push(value)
    }

  return (
      <MainWrapper>
      <Wrapper>
        <SubHeading color={SubHeaderTheme[theme].col}> 
            Searching By {search} Filter 
        </SubHeading>
        
        <SearchBar
            whileFocus={{width:'70%'}}
            type="input" 
            placeholder="Search for your favourite drinks!" 
            onChange={(e)=>onChange(e)}/> 
    </Wrapper>

    <WrapperTwo>
        
                <Label 
                    color={SearchFilterTheme[theme].col} 
                    for="searchTypes">
                    Select search filter
                </Label>
                
                <Input 
                    onChange={onSearch} list="searchTypes" 
                    placeholder="Search By:"/>

            <datalist id ="searchTypes">
                {types.map((o,i)=> <option key={i} value={o}></option>)}
            </datalist>
        </WrapperTwo>
    </MainWrapper>
  )
}
