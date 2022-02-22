import react from 'react';
import {search_types} from '@/utils/variables';


export const SearchSelection = ({
    onSearch=()=>{}
}) => {

    const searchTypes= search_types

    let types= []

    for (const [value]of Object.entries(searchTypes)){
        types.push(value)
    }
    return (
        <div>
            <label>Select search filter</label>
            <input onChange={onSearch} list="searchTypes"/>
            <datalist id ="searchTypes">
                {types.map((o,i)=> <option key={i} value={o}></option>)}
            </datalist>
        </div>
    )
}

