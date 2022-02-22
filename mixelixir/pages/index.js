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

var timer = null

export default function Home() {

  const [val,setVal] = useState('')
  const [arr, setArr] = useState([])
  
  const {search, setSearch} = useSearch()

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

const inputFilter = async (value) =>{
  const res = await ax.get('/api/books', {
    params:{
      value:value,
      searchBy: search_types[search]
    }
  })
  console.log(res)
}


  return (
    <div className={styles.container}>

      <Input
        val={val}
        onValChange={handleValue}
        onButtClick={addValueToArr}
      />
      <button onClick={compareIngs}>Test</button>

    <div style={{
          background:'red', 
          height:200, 
          width:200,
          color:'white'
        }}>
          <button onClick={compareIngs} > matchhh  </button>
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
    <SearchSelection onSearch={(e)=>inputFilter(e.target.value)}/>
    </div>
  )
}
