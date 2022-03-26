import react from 'react';
import {search_types} from '@/utils/variables';
import {SearchFilterTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'

// styled component imports 
import {Input, SearchFilterContainer, Label, Wrapper} from './style'


export const SearchSelection = ({
    onSearch=()=>{}
}) => {

    const searchTypes= search_types

    let types= []

    for (const [value]of Object.entries(searchTypes)){
        types.push(value)
    }
    const {theme} = useTheme();
    return (
        
        <Wrapper>
            

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
        </Wrapper>
    )
}

