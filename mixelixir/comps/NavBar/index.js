import React from "react";
import Link from 'next/link';
import {BsSunFill} from 'react-icons/bs';
import { NavCont, Logo, LinkCont,  } from "./style";



const NavBar = ({
    logoText="LOGO HERE",
    themeToggle=()=>{},
    icon=<BsSunFill/>,
}) => {
    const {theme} = useTheme();
    return <NavCont>
        <Logo>{logoText}</Logo>
        <LinkCont>
            <Link href='/'>Projects</Link>
            <Link href='/'>Stack</Link>
            <Link href='/'>Contact</Link>
            <div  onClick={themeToggle}>
                {icon}
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;