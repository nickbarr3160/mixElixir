import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react'
import ax from 'axios';
// components imports
import { Input } from '../comps/InputBox'
import { useSearch, useTheme } from '../utils/provider';
import { search_types } from '@/utils/variables';
import { SearchSelection } from '@/comps/SearchSelection';
import Link from 'next/link';
import { MyButt } from '@/comps/Button/style';
import { MyButton } from '@/comps/Button';
import DrinkCardUI from '@/comps/DrinkCard';
import {LandingWrapper, DrinkResults, Wrapper, GeneratedCont, IngredientCont, HeroCont, HeroContentCont, IconCont, GenerateContent, MappedIngredients } from '@/styles/styles';
import NavBar from '@/comps/NavBar';
import DrinkCardUIStatic from '@/comps/DrinkCardStatic';
import {HeroMessage} from '@/comps/HeroMessage';
import { DrinkGraphic } from '@/comps/DrinkGraphic';
import {MdOutlineClose} from 'react-icons/md'
import { GenerateTheme } from "@/utils/variables";



var timer = null

export default function Home() {

  const [val,setVal] = useState('')
  const [arr, setArr] = useState([])
  const [generateData, setGenerateData] = useState([]);
  const[curPage, setCurPage] = useState(1)
  const [userToken, setUserToken] = useState()
  const  [ user, setUser] = useState()
  const {theme, setTheme} = useTheme()

  useEffect(()=>{
    setUser( JSON.parse(window.localStorage.getItem('user')))

  },[])
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

  
  // use the user inputted array of ingredients to compare with the drinks dataset for cocktail generator feature
  const compareIngs = async (p) =>{
  const res = await ax.get('./api/drinks', {
    params: {
      array:arr,
      curPage
    }
  })
  // setCurPage(p != undefined? p:1 )
  console.log(curPage)
  setGenerateData(res.data)
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

butt_arr = butt_arr.slice(curPage-5<0?0:curPage-5,curPage+5)

  return (
    <LandingWrapper>
      <NavBar
      themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
      />
  
      {/* Hero Message */}

      <HeroCont>
        <HeroContentCont>
          <HeroMessage/>
        </HeroContentCont>

        
        <HeroContentCont>
          <DrinkGraphic imgSrc='/DrinkImage.svg'/>
        </HeroContentCont>
      </HeroCont>
      
       {/* Generate Content  */}

      <GenerateContent>

        <div>
          <HeroMessage heading="Drink Generator" text="New tasty drinks for you to make based on what you have on hand"/>
        </div>
        <GeneratedCont 
        bgcolor={GenerateTheme[theme].bgcol}
        color={GenerateTheme[theme].col}
        >
            <Input
            val={val}
            onValChange={handleValue}
            onButtClick={addValueToArr}
            />
        
            <MappedIngredients>
            {arr.map((o,i) => (
                <IngredientCont key={i}> 
                  <p> {o} </p>
                  <IconCont onClick={()=>{
                  arr.splice(i,1)
                  setArr([...arr])
                  }}> 
                    <MdOutlineClose color="#FF3864" size="2em"/> 
                  </IconCont>
                </IngredientCont>
              ))}
            </MappedIngredients>
        </GeneratedCont>
        <MyButton onClick={compareIngs}/>
      </GenerateContent>
      
       {/* Drink Results  */}

      <DrinkResults>
          {generateData.map((o,i)=><DrinkCardUIStatic key={i} name={o.strDrink} imgSrc={o.strDrinkThumb} tag={o.strCategory}></DrinkCardUIStatic>)}
      </DrinkResults>
      <div style={{
        display:'flex', 
        border:'2px solid red',
        cursor:'pointer'
        }} >
    {butt_arr.map((o,i)=>(
        
            <button 
              style={{background: o===curPage?"pink":'white' }}  
              key={i} onClick={()=>{
                compareIngs()
                setCurPage(o)}}> 
                {o} 
            </button>
    ) )}
    </div>
    </LandingWrapper>
    )
}
