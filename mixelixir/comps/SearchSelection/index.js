import react from 'react';
import {search_types} from '@/utils/variables';
import {Input, SearchFilterContainer, Label} from './style'
import {SearchFilterTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'

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
        
        <div>
            
            <SearchFilterContainer>
                <Label color={SearchFilterTheme[theme].col} for="searchTypes">Select search filter</Label>
                <Input onChange={onSearch} list="searchTypes" placeholder="Search By:"/>
            </SearchFilterContainer>    
            <datalist id ="searchTypes">
                {types.map((o,i)=> <option key={i} value={o}></option>)}
            </datalist>
        </div>
    )
}

