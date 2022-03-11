import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react'
import ax from 'axios';
// components imports
import { Input } from '../comps/InputBox'
import { useSearch } from '../utils/provider';
import { search_types } from '@/utils/variables';
import { SearchSelection } from '@/comps/SearchSelection';
import Link from 'next/link';
import { MyButt } from '@/comps/Button/style';
import { MyButton } from '@/comps/Button';
import DrinkCardUI from '@/comps/DrinkCard';
import { DrinkResults, Wrapper } from '@/styles/styles';
import NavBar from '@/comps/NavBar';


var timer = null

export default function Home() {

  const [searchData, setSearchData] = useState([]);

  const {search, setSearch} = useSearch()

// function to pass over a specified search filter to the api
const inputFilter = async (value) =>{

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
        searchBy: search_types[search]
      }
    })

    console.log(res.data)
  // store the data in a state for mapping
    setSearchData(res.data)
        
  }, 2000)

}


  return (
    <Wrapper>
      <NavBar/>
      <h1>Welcome use the search bar below to search for a drink!</h1>
      <input onChange={(e)=>inputFilter(e.target.value)}></input>
      <h4> searching by {search} filter </h4>
     
      <DrinkResults>
            {searchData.map((o,i)=><DrinkCardUI key={i} name={o.strDrink} imgSrc={o.strDrinkThumb}></DrinkCardUI>)}
      </DrinkResults>

    
    </Wrapper>
  )
}
