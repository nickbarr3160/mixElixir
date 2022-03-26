import React, {useState} from 'react'

// provider imports
import { useTheme } from '@/utils/provider'
import { NavbarTheme } from '@/utils/variables'

// components import 
import { HeaderHam } from '../HeaderHam'
import { Navigation } from '../HamNav'
import { Header } from '@/styles/styles'
import {BsSunFill} from 'react-icons/bs';
import { Logo, LogoCont } from '../NavBar/style'
import {FiLogOut} from 'react-icons/fi';

export const NavigationHam = ({
  themeToggle=()=>{},
  icon=<BsSunFill size="2em" color="pink"/>,
}) => {
const [toggle,setToggle] = useState(false)
const [hammer, setHammer]= useState(false)

const{theme} = useTheme()//defining the custom hook
  return (
   <Header>
    
      <LogoCont>
          <Logo src='/mix.svg'/>
      </LogoCont>
  
   
      <div style={{display:"flex" ,alignItems:'center', justifyContent:"center"}}>
          <div onClick={themeToggle}>
            {icon}
          </div>

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
      </div>

   </Header>
  )
}
