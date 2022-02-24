import {useContext, createContext, useState} from 'react';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
search:'strDrink',
setSearch:()=>{}
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider
    const [search, setSearch] = useState(initialStates.search)

    //put in the variables you want to share
    return <MyContext.Provider value={{search, setSearch}}>
        {children}
    </MyContext.Provider>
}

//use the Context to create Hooks like useTheme
export function useSearch(){
    const {search, setSearch} = useContext(MyContext)
    return {search, setSearch}
}