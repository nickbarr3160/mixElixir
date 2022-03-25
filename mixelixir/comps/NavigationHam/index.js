import React, {useState} from 'react'

// provider imports
import { useTheme } from '@/utils/provider'
import { NavbarTheme } from '@/utils/variables'

// components import 
import { HeaderHam } from '../HeaderHam'
import { Navigation } from '../HamNav'
import { Header } from '@/styles/styles'

export const NavigationHam = () => {
const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)

const{theme} = useTheme()//defining the custom hook


  return (
   <Header>
   <HeaderHam 
            onHamClick={()=>{ 
            setHammer(!hammer)
            setToggle(!toggle)
            }}
        
            ham={hammer} /> 
        <Navigation 
        toggleMenu={toggle}  
        setToggleMenu={setToggle}
        myHam = {hammer}
        hamClick={()=>
                {
                setHammer(!hammer)
                setToggle(!toggle)
                }}
    />
   </Header>
  )
}
