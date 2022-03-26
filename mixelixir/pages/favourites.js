import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react'
import ax from 'axios';


// components imports
import { useSearch, useTheme } from '@/utils/provider';
import { DrinkResults, Wrapper } from '@/styles/styles';
import NavBar from '@/comps/NavBar';
import { NavigationHam } from '@/comps/NavigationHam';
import DrinkCardUIStatic from '@/comps/DrinkCardStatic';
import {BsSunFill} from 'react-icons/bs';
import {MdDarkMode} from 'react-icons/md';
import { DrinkCardMobile } from '@/comps/DrinkCardMobile';

var timer = null

export default function Favourites() {

  const {theme, setTheme} = useTheme()//using custom theme hook
    
  const router = useRouter()
  const [searchData, setSearchData] = useState([]);
  const [curPage, setCurPage] = useState(1)
  const [favDrinks, setFavDrinks] = useState([])
  const [ user, setUser] = useState()

  // state to keep track of current screen size
  const [sWidth, setSwidth] = useState()
  const [clicked,setClicked] = useState()

// useEffect retrieving the user Object from local storage
useEffect(()=>{
  setUser( JSON.parse(window.localStorage.getItem('user')))
},[])
    
//useEffect detecting screen resizing
    useEffect(()=>{
        setSwidth(window.innerWidth)
        window.onload=()=>{setSwidth(window.innerWidth)}
        window.onresize=()=>{
        setSwidth(window.innerWidth)
        console.log(sWidth)
    }
    // detecting when the screen resizes
    },[sWidth])
    
// use effect sending in a get request to the api to receive favourite drinks every time the user changes 
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




// function to send the drink id and user object to the REST API
const handleFavs = async(o)=>
{
  try{
    const res = await ax.post("./api/drinks",{
      favDrink:o._id,
      user
    })
  }catch(err){console.log(err, 'request failed to execute')}
  console.log(o)
}


  return (
    <Wrapper>
      {/* show the hamburger if the screen size is less than 600px else regular navbar */}
    {sWidth<600?<NavigationHam
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<MdDarkMode size="2em" color="#FF3549"/>:<BsSunFill size="2em" color="white" />}
      />: <NavBar
    themeToggle={()=>setTheme(
    theme=== 'light'?'default':'light')}
    icon={theme==='light'?<MdDarkMode  size="1.5em"/>:<BsSunFill size="1.5em"/>}
    />}
    <DrinkResults>
    
            {favDrinks.map((o,i)=>(
              sWidth > 600?
            <DrinkCardUIStatic 
              onClick={()=>router.push(`/search/${o.drink.idDrink}`)}
              key={i} 
              name={o.drink.strDrink}
              tag={o.drink.strCategory} 
              imgSrc={o.drink.strDrinkThumb}
              onFavClick={()=>{handleFavs(o,i)}}
              favCol={clicked ===i?'#FF3549':null}
              />
              :<DrinkCardMobile
              key={i} 
              name={o.drink.strDrink} 
              imgSrc={o.drink.strDrinkThumb} 
              tag={o.drink.strCategory}
              onClick={()=>router.push(`/search/${o.idDrink}`)}
              onFavClick={()=>{handleFavs(o,i)}}
              favCol={clicked ===i?'#FF3549':null}
              />
            ))}
    </DrinkResults>
            

        
    </Wrapper>
)
}
