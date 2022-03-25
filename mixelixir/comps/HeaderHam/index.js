import React from 'react';

// provider imports
import { useTheme } from '@/utils/provider'
import { NavbarTheme } from '@/utils/variables'

// styled components
import { 
    HamContainer,
    HamLine1,
    HamLine2,
    HamLine3

} from './styles';

export const HeaderHam = (
    {
    onHamClick=()=>{},
    ham,
    setHam,
    transLine1 = "rotate(0deg) translate(0,0)",
    transLineOp2 = "1",
    transLine3 = "rotate(0deg) translate(0,0)",
    transLine1Chain= "rotate(405deg) translate(12px, 6px)",
    transLineOp2Chain= "0",
    transLine3Chain= "rotate(-405deg) translate(11px, -6px)"
    }
) => {

    const{theme} = useTheme()//defining the custom hook
    const themer = NavbarTheme[theme]//asigning a variable to use later on (ease of use)

    return<HamContainer onClick={onHamClick} >
        <HamLine1 
            iconCol={themer.icon}
            LineTrans1={ ham ? transLine1Chain : transLine1}
            col='red'
        />

    
        <HamLine2 
            iconCol={themer.icon}
            LineTransOp2={ ham ? transLineOp2Chain: transLineOp2}
            col='red'
        />
        
        <HamLine3 
            iconCol={themer.icon}
            LineTrans3={ ham ? transLine3Chain : transLine3} 
            col='red'
            />
    </HamContainer>;
};
