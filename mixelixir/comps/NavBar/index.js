import React from "react";
import Link from 'next/link';
import { NavCont, Logo, LinkCont,  } from "./style";



const NavBar = ({
    logoText="LOGO HERE",
    themeToggle=()=>{},
    icon="darkModeIconToggleHere",
}) => {
    return <NavCont>
        <Logo>{logoText}</Logo>
        <LinkCont>
            <Link href='/'>Home</Link>
            <Link href='/search'>Search Drinks!</Link>
            <Link href='/settings'>Settings</Link>
            <div  onClick={themeToggle}>
                {icon}
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;