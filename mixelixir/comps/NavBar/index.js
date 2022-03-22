import React from "react";
import Link from 'next/link';
import { NavCont, Logo, LinkCont,  NavLink} from "./style";
import {BsSunFill} from 'react-icons/bs';
import { NavbarTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider';

const NavBar = ({
    logoText="ME",
    themeToggle=()=>{},
    icon=<BsSunFill />,
}) => {
    const {theme} = useTheme();
    return <NavCont bgcolor={NavbarTheme[theme].bg}>
        <Logo color={NavbarTheme[theme].color}>{logoText}</Logo>
        <LinkCont color={NavbarTheme[theme].color}>
            <NavLink color={NavbarTheme[theme].color} href='/'>Home</NavLink>
            <NavLink color={NavbarTheme[theme].color} href='/search'>Search Drinks!</NavLink>
            <NavLink color={NavbarTheme[theme].color} href='/favourites'>Favourite Drinks!</NavLink>
            <NavLink color={NavbarTheme[theme].color} href='/settings'>Settings</NavLink>
            <div  onClick={themeToggle}>
                {icon}
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;