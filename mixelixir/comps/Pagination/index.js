import React from 'react'

import { Wrapper,Page } from './styles'

import { useTheme } from '@/utils/provider'
import { HeroTheme } from '@/utils/variables'

export const Pagination = (
    {
        onClick=()=>{},
        array=[],
        curPage,
        keyword,
        o
    }
) => {
    // pagination============
const {theme} = useTheme()
const themer = HeroTheme[theme]

return (
    <Wrapper>
        {array.map((o,i)=>(
        <Page
        height={o==curPage?'50px':'30px'}
        width={o==curPage?'50px':'30px'}
        style={{background: o===curPage?"#FF3549":'none' }}  
        col={themer.textCol} 
        key={i} 
        onClick={()=>onClick(o)}> 
            {o} 
        </Page>
        ) )}
    </Wrapper>

)
}

