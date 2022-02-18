import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react'
import ax from 'axios';
// components imports
import { Input } from '../comps/InputBox'


export default function Home() {

  const [val,setVal] = useState('')
  const [arr, setArr] = useState([])
  
  

  const handleValue = (e)=>
  {
    setVal(e.target.value)
    // updating the state of the input box value on
  }

  const addValueToArr = ()=>
  {
    arr.length <= 4-1 ? setArr([...arr, val]):null 
    // adding values from the input box to an array names arr if the length of the array is less than or equal to 4
  }

  const compareIngs = async () =>{
  const res = await ax.get('/api/all_drinks', {
    params:{
      ings:arr
    }
  })
}
  compareIngs();

  return (
    <div className={styles.container}>

      <Input
        val={val}
        onValChange={handleValue}
        onButtClick={addValueToArr}
        
      />

    <div style={{
          background:'red', 
          height:200, 
          width:200,
          color:'white'
        }}>
          
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

    </div>
  )
}
