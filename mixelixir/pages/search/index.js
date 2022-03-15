import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react'
import ax from 'axios';


// components imports
import { Input } from '@/comps/InputBox'
import { useSearch } from '@/utils/provider';
import { search_types } from '@/utils/variables';
import { SearchSelection } from '@/comps/SearchSelection';

import { DrinkResults, Wrapper } from '@/styles/styles';
import NavBar from '@/comps/NavBar';

import DrinkCardUIStatic from '@/comps/DrinkCardStatic';

var timer = null

export default function SearchSelect() {

  const router = useRouter()

  const [searchData, setSearchData] = useState([]);
  const[curPage, setCurPage] = useState(1)
  const {search, setSearch} = useSearch()
  const [keyword,setKeyWord] = useState()

// function to pass over a specified search filter to the api
const inputFilter = async (value,p) =>{

  if (timer)
    {
      clearTimeout(timer)
      timer=null
    }

  if (timer===null)
  timer = setTimeout(async()=>{
    const res = await ax.get('./api/drinks', {
    params:{
          value:value.toLowerCase(),
          searchBy: search_types[search],
          page:p,
    }
    
    })
    // console.log(p)

  // store the data in a state for mapping
    setKeyWord(value)
    setSearchData(res.data)
    setCurPage(p)

  }, 100)  

}

const itemsPerPage = 15;
  var butt_arr = [];

  var start = 1
  for (let i =1; i<600; i+= itemsPerPage )
  {
    // 
    butt_arr.push(((i-1)/itemsPerPage)+1)
    // when i - 1 => 1-1/15 +1 = 1
    //when i is 16(i+= items/page)=> 15-1/15+1 =2 and so on
    start ++
  }
  
  // butt_arr = butt_arr.slice(curPage-5<0?0:curPage-5,curPage+5
  //   )

  return (
    <Wrapper>
    <NavBar/>
    <h1>
      Welcome use the search bar below to search for a drink!
    </h1>
    <input onChange={(e)=>inputFilter(e.target.value)}></input>
    <div style={{
        display:'flex', 
        border:'2px solid red',
        height:'100%',
        width:'100%'
        }} >
    {butt_arr.map((o,i)=>(
        
            <button 
              style={{background: o===curPage?"pink":'white' }}  
              key={i} onClick={()=>inputFilter(keyword,o)}> 
                {o} 
            </button>
    ) )}


    </div>
    <h4> searching by {search} filter </h4>
    
    <DrinkResults>
    
            {searchData.map((o,i)=>(
            <DrinkCardUIStatic 
              onClick={()=>router.push(`/search/${o.idDrink}`)}
              key={i} 
              name={o.strDrink} 
              imgSrc={o.strDrinkThumb}
              >
            </DrinkCardUIStatic>))}
              
    </DrinkResults>

        
    </Wrapper>
)
}
