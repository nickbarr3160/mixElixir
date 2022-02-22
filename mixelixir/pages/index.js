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
import { ListWrapper } from '@/comps/IngredientsList/styles';
import { IngredientList } from '@/comps/IngredientsList';
import DrinkCardUI from '@/comps/DrinkCard';
import { DrinkResults, Wrapper } from '@/styles/styles';

var timer = null

export default function Home() {

  const [val,setVal] = useState('')
  const [arr, setArr] = useState([])
  const [searchData, setSearchData] = useState([]);
  
  const {search, setSearch} = useSearch()
  // console.log(search)

  const handleValue = (e)=>
  {
    setVal(e.target.value)
    // updating the state of the input box value on
  }

  const addValueToArr =()=>
  {
    arr.length <= 4-1 ? setArr([...arr, val]):null 
    console.log(arr)
    // adding values from the input box to an array names arr if the length of the array is less than or equal to 4
  }

  
  // use the user inputted array of ingredients to compare witht the drinks dataset for cocktail generator feature
  const compareIngs = async () =>{
  const res = await ax.get('./api/drinks', {
    params: arr
  })
  console.log(res.data)
}

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
      <h1>Welcome</h1>
      <input onChange={(e)=>inputFilter(e.target.value)}></input>
      <h3> searching by {search} filter </h3>
     
      <DrinkResults>
      {searchData.map((o,i)=><DrinkCardUI key={i} name={o.strDrink} imgSrc={o.strDrinkThumb}></DrinkCardUI>)}
      </DrinkResults>

      <Input
        val={val}
        onValChange={handleValue}
        onButtClick={addValueToArr}
      />
     
    <h1>Cocktail Generator</h1>
    <div style={{
          background:'red', 
          height:200, 
          width:200,
          color:'white'
        }}>
          <MyButton onClick={compareIngs}/>
          {/* <button onClick={compareIngs} > matchhh  </button> */}
          {arr.map((o,i) => (
              <div key={i}> 
                <p> {o} </p>
                <button onClick={()=>{
                  arr.splice(i,1)
                  setArr([...arr])
                  // delete the i th element of the array when click on the button
                  }}> del 
                  </button>
              </div>
                
                
              
              ))} 
            </div>
    <div style={{
          background:'red', 
          height:200, 
          width:200,
          color:'white'
        }}>
          <MyButton onClick={compareIngs}/>
        
    </div>
    <Link href='/settings'>Head back to settings</Link>
    </Wrapper>
  )
}
