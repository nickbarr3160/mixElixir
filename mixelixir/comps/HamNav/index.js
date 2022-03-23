import React,{useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

import { HeaderHam} from '../HeaderHam';

// styled components
import { Container } from '@/styles/styles';
import { Nav, NavHeader,CloseNav, NavList, NavVideos, HamIconCont } from './styles';

export const Navigation = (
    {
    toggleMenu,
    setToggleMenu,
    hamClick=()=>{}},
    myHam,
    links =[
        {
            id:0,
            title:"Home",
            link:'/'
        },
        {
            id:1,
            title:"About",
            link:'/about'
        },
        // {
        //     id:2,
        //     title:"Showcase",
        //     link:'/work'
        // },
        {
            id:4,
            title:"Resume",
            link:'/AbhayBakshi.pdf'
        },
    ]
    
    ) => {
    const r =useRouter()
    const [reveal,setReveal] = useState({
        show:false,
        video:"",
        key:0
    })


  return <>
    <AnimatePresence>
  
    {toggleMenu && 
    <Nav
        initial={{x:"-100%"}}
        exit={{x:"-100%"}}
        animate={{x:toggleMenu?0:100}}
        transition={{duration:.8,ease:[.6,.05,-.01,.9]}}
        listbg='blue'
        >
    <Container>
        <NavHeader>
                <HeaderHam
                    ham={myHam}
                    onHamClick={hamClick}/>       
        </NavHeader>
        <NavList  linkCol='black'>
            <ul>
                {links.map((o,i)=> (<motion.li
                                        key={i}
                                        >
                    <motion.div 
                        className='link'
                        initial={{x:0}}
                        whileHover={{x:40}}

                        >
                    <div onClick={()=>{ o.title==='Resume'? window.open("/AbhayBakshi.pdf", '_blank'): r.push(o.link)}}>
                        {o.title}
                    </div>
                    </motion.div>
                </motion.li>))}
                
            </ul>
        </NavList>
        <NavVideos  
            revealBG='blue'>
            <motion.div 
            className='reveal'
            animate={{width:reveal.show ? 0 :"100%"}}>
            </motion.div>
            
            <div className='video'> helloo
                
                {/* you can add animate presence that is a built in function in framer motion to detect when a component unmounts to make it smooth when switiching between links */}

                {/* <video src={require('../../public/videoOne.mp4')}
                loop
                autoPlay > 
                </video> */}
            </div>
        </NavVideos>
    </Container>
  </Nav> }
  </AnimatePresence>
  </>
};
