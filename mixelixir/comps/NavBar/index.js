import React from "react";
import Link from 'next/link';
import { NavCont, Logo, LinkCont,  NavLink, LogoCont,} from "./style";
import {BsSunFill} from 'react-icons/bs';
import { NavbarTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider';
import { useRouter } from "next/router";

const NavBar = ({
    logoText="ME",
    themeToggle=()=>{},
    icon=<BsSunFill />,
}) => {
    const {theme} = useTheme();
    const router = useRouter();
    return <NavCont bgcolor={NavbarTheme[theme].bg}>
        
        <LogoCont onClick={()=>router.push('/')}>
            <Logo src='/logo.png'/>
        </LogoCont>

        <LinkCont color={NavbarTheme[theme].color}>
            {/* <NavLink color={NavbarTheme[theme].color} href='/'>Home</NavLink> */}
            <NavLink color={NavbarTheme[theme].color} href='/search'>Search</NavLink>
            <NavLink color={NavbarTheme[theme].color} href='/event'>Event Forum</NavLink>
            <NavLink color={NavbarTheme[theme].color} href='/favourites'>Favourites</NavLink>
            <div  onClick={themeToggle}>
                {icon}
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;