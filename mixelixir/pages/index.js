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
import { DrinkResults, Wrapper, GeneratedCont, IngredientCont } from '@/styles/styles';
import NavBar from '@/comps/NavBar';


var timer = null

export default function Home() {

  const [val,setVal] = useState('')
  const [arr, setArr] = useState([])
  const [generateData, setGenerateData] = useState([]);
  
  
  
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
  setGenerateData(res.data)
}


  return (
    <Wrapper>
      <NavBar/>
  
      <h1>Cocktail Generator</h1>
    
      <GeneratedCont>
          <Input
          val={val}
          onValChange={handleValue}
          onButtClick={addValueToArr}
          />
        
          {arr.map((o,i) => (
            <IngredientCont key={i}> 
                <p> {o} </p>
                <button onClick={()=>{
                  arr.splice(i,1)
                  setArr([...arr])
            
                  }}> del 
                  </button>
            </IngredientCont>
              
              ))}
        <MyButton onClick={compareIngs}/>
      </GeneratedCont>
      
      <DrinkResults>
          {generateData.map((o,i)=><DrinkCardUI key={i} name={o.strDrink} imgSrc={o.strDrinkThumb}></DrinkCardUI>)}
      </DrinkResults>
    </Wrapper>
    )
}
