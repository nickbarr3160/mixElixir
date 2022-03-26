import React from 'react'

import { Wrapper,Page } from './styles'



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

return (
    <Wrapper>
        {array.map((o,i)=>(
        <Page 
        height={o==curPage?'50px':'30px'}
        width={o==curPage?'50px':'30px'}
        style={{background: o===curPage?"#FF3549":'none' }}  
        key={i} 
        onClick={()=>onClick(o)}> 
            {o} 
        </Page>
        ) )}
    </Wrapper>

)
}

