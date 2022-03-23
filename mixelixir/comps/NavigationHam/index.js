import React, {useState} from 'react'

// components import 
import { HeaderHam } from '../HeaderHam'
import { Navigation } from '../HamNav'


export const NavigationHam = () => {
const [toggle,setToggle] = useState(false)
 const [hammer, setHammer]= useState(false)
  return (
   <>
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
   </>
  )
}
