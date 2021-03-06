import React from "react";
import Link from 'next/link';
import { NavCont, Logo, LinkCont,  NavLink, LogoCont,} from "./style";
import {BsSunFill} from 'react-icons/bs';
import { NavbarTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider';
import { useRouter } from "next/router";
import {FiLogOut} from 'react-icons/fi';

const NavBar = ({
    logoText="ME",
    themeToggle=()=>{},
    icon=<BsSunFill size="1.5em"/>,
}) => {
    const {theme} = useTheme();
    const router = useRouter();
    return <NavCont bgcolor={NavbarTheme[theme].bg}>
        
        <LogoCont onClick={()=>router.push('/home')}>
            <Logo src='/mix.svg'/>
        </LogoCont>

        <LinkCont color={NavbarTheme[theme].color}>
            {/* <NavLink color={NavbarTheme[theme].color} href='/'>Home</NavLink> */}
            <NavLink color={NavbarTheme[theme].color} onClick={()=>router.push('/search')}>Search</NavLink>
            <NavLink color={NavbarTheme[theme].color} onClick={()=>router.push('/event')}>Event Forum</NavLink>
            <NavLink color={NavbarTheme[theme].color} onClick={()=>router.push('/favourites')}>Favourites</NavLink>
            <div  onClick={themeToggle}>
                {icon}
            </div>
            <div
                onClick={()=>{
                    window.localStorage.removeItem('user')
                    router.push('/')
                }}
            >
                <FiLogOut size="1.5em" color={NavbarTheme[theme].signout}/>
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;