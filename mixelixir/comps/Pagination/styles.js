import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
display:flex;
width:100%;
// border:2px solid yellow;
justify-content:space-around;
cursor:pointer;
margin-bottom:2em;
`

export const Page = styled(motion.div)`
display:flex;
justify-content:space-around;
align-items:center;
transition:all .2s;
color:${props=>props.col};
border-radius:50px;
border:.5px solid #FF3549;
height:${props=>props.height};
width:${props=>props.width};
`