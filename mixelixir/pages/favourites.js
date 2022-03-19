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
import { isExpired, decodeToken } from "react-jwt";
import { DrinkResults, Wrapper } from '@/styles/styles';
import NavBar from '@/comps/NavBar';

import DrinkCardUIStatic from '@/comps/DrinkCardStatic';

var timer = null

export default function Favourites() {

    
    const router = useRouter()
  const [searchData, setSearchData] = useState([]);
  const[curPage, setCurPage] = useState(1)
  const [favDrinks, setFavDrinks] = useState()
  const  [ user, setUser] = useState()



useEffect(()=>{
  setUser( JSON.parse(window.localStorage.getItem('user')))
},[])

useEffect(()=>{
    const getFavs = async ()=>
    {
        const res = await ax.get("./api/drinks",{
          params:{
            token: user
          }
        })
        setFavDrinks(res.data)
      }
      
      getFavs()
},[user])

console.log(favDrinks)
// function to pass over a specified search filter to the api


const handleFavs = async(o)=>
{
  // console.log(o)
  try{
    const res = await ax.post("./api/drinks",{
      favDrink:o._id,
      user
    })
  }catch(err){console.log(err, 'request failed to execute')}
  console.log(o)
}

// pagination============
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
  
  butt_arr = butt_arr.slice(curPage-5<0?0:curPage-5,curPage+5)


  return (
    <Wrapper>
    <NavBar/>
    
    <DrinkResults>
    
            {searchData.map((o,i)=>(
            <DrinkCardUIStatic 
            onClick={()=>router.push(`/search/${o.idDrink}`)}
            key={i} 
            name={o.strDrink} 
            imgSrc={o.strDrinkThumb}
            onFavClick={()=>{handleFavs(o)}}
            >
            </DrinkCardUIStatic>))}
            
    </DrinkResults>

        
    </Wrapper>
)
}
