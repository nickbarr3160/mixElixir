import React from 'react'



var butt_arr = [];
var Mypaginate = 10
var MycurPage= 0
const itemsPerPage = 10;

// var number = searchData.length<1?0:600
var start = 1
for (let i =1; i<Mypaginate; i+= itemsPerPage )
{
  // 
butt_arr.push(((i-1)/itemsPerPage)+1)
  // when i - 1 => 1-1/15 +1 = 1
  //when i is 16(i+= items/page)=> 15-1/15+1 =2 and so on
start ++
}
butt_arr = butt_arr.slice(MycurPage-5<0?0:MycurPage-5,MycurPage+5)

export const Pagination = (
    {
        array = butt_arr,
        paginate =Mypaginate,
        curPage = MycurPage,
        onClick = (keyword,o)=>{},
        keyword
    }
) => {
    // pagination============

return (
    <>
        {array.map((o,i)=>(
        <button 
        style={{background: o===curPage?"pink":'white' }}  
        key={i} 
        onClick={()=>onClick(keyword,o)}> 
            {o} 
        </button>
        ) )}
    </>

)
}

