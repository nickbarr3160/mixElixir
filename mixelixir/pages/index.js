import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react'
// components imports

import { Input } from '../comps/InputBox'


export default function Home() {

  const [val,setVal] = useState('')
  const [arr, setArr] = useState([])
  
  
// console.log(arr)
  const handleValue = (e)=>
  {
    setVal(e.target.value)
  }

  const handleList = ()=>
  {

  }

  // console.log(arr)
  return (
    <div className={styles.container}>
      <Input
        val={val}
        onValChange={handleValue}
        onButtClick={()=>{
          arr.length <= 4-1 ? setArr([...arr, val]):null 
        }}
        
      />

    <div style={{
          background:'red', 
          height:200, 
          width:200,
          color:'white'
        }}>
          
          {arr.map((o,i) => (
              <div key={i} > 
                <p> {o} </p>
                <button onClick={()=>{
                  arr.splice(i,1)
                  setArr([...arr])
                  }}> del 
                  </button>
              </div>
              
              ))}

    </div>

    </div>
  )
}
