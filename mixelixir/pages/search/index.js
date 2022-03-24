import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react'
import ax from 'axios';


// components imports
import { Input } from '@/comps/InputBox'
import { useSearch, useTheme } from '@/utils/provider';
import { search_types } from '@/utils/variables';
import { SearchSelection } from '@/comps/SearchSelection';
import { isExpired, decodeToken } from "react-jwt";
import { DrinkResults, Wrapper, SearchWrapper, SearchBar, Heading, SubHeading, HeadingCont, PaginationCont } from '@/styles/styles';
import NavBar from '@/comps/NavBar';
import DrinkCardUIStatic from '@/comps/DrinkCardStatic';
import { HeaderTheme, SubHeaderTheme } from "@/utils/variables";


var timer = null

export default function SearchSelect() {

  const router = useRouter()

  const [searchData, setSearchData] = useState([]);
  const[curPage, setCurPage] = useState(1)
  const {search, setSearch} = useSearch()
  const [keyword,setKeyWord] = useState()
  const [userToken, setUserToken] = useState()
  const  [ user, setUser] = useState()
  const {theme, setTheme} = useTheme()
  const [favCol, setFavCol] = useState()

  const setType = (txt)=>{
      console.log("this is the arg", txt)
      
      setTimeout(()=>{
        setSearch(txt)
      },500)  
    }


  useEffect(()=>{
    setUser( JSON.parse(window.localStorage.getItem('user')))

  },[])

// function to pass over a specified search filter to the api
const inputFilter = async (value,p) =>{

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
          searchBy: search_types[search],
          page:p,
    }
    
    })

  // store the data in a state for mapping
    setKeyWord(value)
    setSearchData(res.data)
    setCurPage(p != undefined? p:1 )//fail safe at the time when function runs

  }, 100)  

}


const handleFavs = async(o, i)=>
{
  console.log(i)
  setFavCol('#FF3549')
  try{
    const res = await ax.post("./api/drinks",{
      favDrink:o._id,
      user:user.user
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
    <NavBar
      themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
    />
    
    <HeadingCont>
      <Heading color={HeaderTheme[theme].col}>
        Welcome {user != undefined && user.user.username} use the search bar below to search for a drink!
      </Heading>
      <SubHeading color={SubHeaderTheme[theme].col}> searching by {search} filter </SubHeading>
    </HeadingCont> 

    <SearchWrapper>
      <SearchBar type="input" placeholder="Search for your favourite drinks!" onChange={(e)=>inputFilter(e.target.value)}></SearchBar>
      <SearchSelection onSearch={(e)=> setType(e.target.value)}/>
    </SearchWrapper>  

    
    <DrinkResults>
    
            {searchData.map((o,i)=>(
              <DrinkCardUIStatic 
              onClick={()=>router.push(`/search/${o.idDrink}`)}
              key={i} 
              name={o.strDrink} 
              imgSrc={o.strDrinkThumb}
              tag={o.strCategory}
              onFavClick={(i)=>{handleFavs(i)}}
              favCol={favCol}
              >
            </DrinkCardUIStatic>))}
              
    </DrinkResults>
    
    <PaginationCont>
      {butt_arr.map((o,i)=>(
        <button 
        style={{background: o===curPage?"pink":'white' }}  
        key={i} onClick={()=>inputFilter(keyword,o)}> 
        {o} 
        </button>
        ) )}
    </PaginationCont>

        
    </Wrapper>
)
}
