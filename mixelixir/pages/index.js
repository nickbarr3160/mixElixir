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
import DrinkCardUI from '@/comps/DrinkCardDrag';
import NavBar from '@/comps/NavBar';
import DrinkCardUIStatic from '@/comps/DrinkCardStatic';
import {HeroMessage} from '@/comps/HeroMessage';
import { DrinkGraphic } from '@/comps/DrinkGraphic';
import {MdOutlineClose} from 'react-icons/md'
import { GenerateTheme } from "@/utils/variables";
import {BsSunFill} from 'react-icons/bs';
import {MdDarkMode} from 'react-icons/md';
import {useRouter} from 'next/router'
import { NavigationHam } from '@/comps/NavigationHam';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import { DrinkCardMobile } from '@/comps/DrinkCardMobile';
// styled components imports
import {
  LandingWrapper, 
  DrinkResults, 
  Wrapper, 
  GeneratedCont, 
  IngredientCont, 
  HeroCont, 
  HeroContentCont, 
  IconCont, 
  GenerateContent, 
  MappedIngredients ,
  AddIngredientsColumn
} from '@/styles/styles';
var timer = null

export default function Home() {

  const [val,setVal] = useState('')
  const [arr, setArr] = useState([])
  const [generateData, setGenerateData] = useState([]);
  const [curPage, setCurPage] = useState(1)
  const [userToken, setUserToken] = useState()
  const [ user, setUser] = useState()
  const {theme, setTheme} = useTheme()
  const router= useRouter()

  const [paginate, setPaginate] = useState(0)


  const [sWidth, setSwidth] = useState()


  useEffect(()=>{
      setSwidth(window.innerWidth)
      window.onload=()=>{setSwidth(window.innerWidth)}
      window.onresize=()=>{
      setSwidth(window.innerWidth)
  }
  // detecting when the screen resizes
  },[sWidth])

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
    if (timer)
    {
      clearTimeout(timer)
      timer=null
    }

    if (timer === null )
      timer = setTimeout(async()=>{
        const res = await ax.get('./api/drinks', {
          params: {
            array:arr,
            page:p
          }
        })
        setGenerateData(res.data.result)
        setPaginate(res.data.length)// setting the total number of items for the search result
        setCurPage(p)
        
      },100)
    

}

const itemsPerPage = 10;
var butt_arr = [];

var start = 1
for (let i =1; i<paginate; i+= itemsPerPage )
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
      {/* if the screen size is less than 600px */}
      {sWidth<600?<NavigationHam/>:
        <NavBar
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<MdDarkMode  size="1.5em"/>:<BsSunFill size="1.5em"/>}
        />}
    
  
      {/* Hero Message */}

      <HeroCont>
        <HeroContentCont>
          <HeroMessage heading={`Welcome ${user && user.user.username}`}/>
        </HeroContentCont>

        
        <HeroContentCont>
          <DrinkGraphic imgSrc='/DrinkImage.svg'/>
        </HeroContentCont>
      </HeroCont>
      
       {/* Generate Content  */}

      <GenerateContent>
        
        <HeroCont>
          <HeroContentCont>
            <HeroMessage 
              heading="Drink Generator" 
              text="New tasty drinks for you to make based on what you have on hand"/>
          </HeroContentCont>
        </HeroCont>

        <GeneratedCont 
        bgcolor={GenerateTheme[theme].bgcol}
        color={GenerateTheme[theme].col}
        >

            <AddIngredientsColumn>
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
            </AddIngredientsColumn>

            <Player
            autoplay
            src="https://assets9.lottiefiles.com/packages/lf20_rlzyqo6a.json"
            style={{ height: '300px', width: '300px', }} 
            >
            {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
            </Player>
        </GeneratedCont>
        <MyButton onClick={()=>compareIngs(curPage)}/>
      </GenerateContent>
      
       {/* Drink Results  */}

      <DrinkResults>
          {generateData.map((o,i)=>
          sWidth >600 ?
          <DrinkCardUIStatic 
          key={i} 
          name={o.strDrink} 
          imgSrc={o.strDrinkThumb} 
          tag={o.strCategory}
          onClick={()=>router.push(`/search/${o.idDrink}`)}
          />: <DrinkCardMobile
          key={i} 
          name={o.strDrink} 
          imgSrc={o.strDrinkThumb} 
          tag={o.strCategory}
          onClick={()=>router.push(`/search/${o.idDrink}`)}/>
        )}

      </DrinkResults>
      <div style={{
        display:'flex', 
        border:'2px solid red',
        cursor:'pointer'
        }}>
        
    {butt_arr.map((o,i)=>(
            <button 
              style={{background: o===curPage?"pink":'white' }}  
              key={i} onClick={()=>{
                // setCurPage(o)
                compareIngs(o)}}
                > 
                {o} 
            </button>
    ))}
    </div>
    </LandingWrapper>
    )
}