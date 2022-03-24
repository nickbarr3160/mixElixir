import {useContext, createContext, useState} from 'react';
import {global_theme} from './variables';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
search:'Cocktail Name',
theme:'default',
setSearch:()=>{}
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider
    const [search, setSearch] = useState(initialStates.search)
    const [theme, setTheme] = useState(initialStates.theme)
    //put in the variables you want to share
    return <MyContext.Provider value={{search, setSearch,  theme, setTheme}}>
            <style jsx global>{
            `
            body{
                background-color:${global_theme[theme].body};
            }
            `
        }
        </style>
        {children}
    </MyContext.Provider>
}

//use the Context to create Hooks like useTheme
export function useSearch(){
    const {search, setSearch} = useContext(MyContext)
    return {search, setSearch}
}

export function useTheme(){
    const {theme, setTheme} = useContext(MyContext)
    return {theme, setTheme}
}