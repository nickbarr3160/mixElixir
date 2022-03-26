import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react'
import ax from 'axios';

// styled components
import { 
  DrinkResults, 
  Wrapper, 
  SearchBarWrapper, 
  SearchBar, 
  Heading, 
  SubHeading, 
  HeadingCont, 
  PaginationCont 
} from '@/styles/styles';

// custom hook and variables
import { useSearch, useTheme } from '@/utils/provider';
import { search_types } from '@/utils/variables';
import { HeaderTheme, SubHeaderTheme } from "@/utils/variables";

// components imports
import NavBar from '@/comps/NavBar';
import DrinkCardUIStatic from '@/comps/DrinkCardStatic';
import {BsSunFill} from 'react-icons/bs';
import {MdDarkMode} from 'react-icons/md';
import { Pagination } from '@/comps/Pagination';
import { SearchBarInput } from '@/comps/SearchInput';
import { NavigationHam } from '@/comps/NavigationHam';
import { DrinkCardMobile } from '@/comps/DrinkCardMobile';


var timer = null

export default function SearchSelect() {

  const router = useRouter()

  const {theme, setTheme} = useTheme()



  const [searchData, setSearchData] = useState([]);
  const[curPage, setCurPage] = useState(1)
  const {search, setSearch} = useSearch()
  const [keyword,setKeyWord] = useState()
  const [userToken, setUserToken] = useState()
  const  [ user, setUser] = useState()
  const [favCol, setFavCol] = useState()
  const  [ clicked, setClicked] = useState ()
  const [paginate, setPaginate] = useState(0)

  const [inputWidth, setInputWidth] = useState('50%')

  const [sWidth, setSwidth] = useState()
  // state to keep track of current screen size


  useEffect(()=>{
      setSwidth(window.innerWidth)
      window.onload=()=>{setSwidth(window.innerWidth)}
      window.onresize=()=>{
      setSwidth(window.innerWidth)
  }
  // detecting when the screen resizes
  },[sWidth])
  
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
console.log(keyword)
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
    setSearchData(res.data.result)
    setCurPage(p != undefined? p:1 )//fail safe at the time when function runs
    setPaginate(res.data.length)// setting the total number of items for the search result
  }, 100)  

}

console.log(paginate)


const handleFavs = async(o, i)=>
{
  setClicked(i)
  try{
    const res = await ax.post("./api/drinks",{
      favDrink:o._id,
      user:user.user
    })
  }catch(err){console.log(err, 'request failed to execute')}
  console.log(o)
}

// pagination============
  const itemsPerPage = 10;
  var butt_arr = [];
  var start = 1
  // paginate is a value that is returned by 4th argument of the GoToPage function to determine the total number of searches.
  // this value is dynamic based on different searches
  // hence it determines the number of pages 
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
    <Wrapper>
    
    {sWidth<600?<NavigationHam
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<MdDarkMode size="2em" color="#FF3549"/>:<BsSunFill size="2em" color="white" />}
      />: <NavBar
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        />}
    
    <HeadingCont>
      <Heading color={HeaderTheme[theme].col}>
        Welcome {user != undefined && user.user.username}. 
        <div>Use the search bar below to search for a drink!</div>
      </Heading>
      
    </HeadingCont> 

    <SearchBarWrapper>
        <SearchBarInput
          search={search}
          width={inputWidth}
          onChange={(e)=>inputFilter(e.target.value)}
          onSearch={(e)=> setType(e.target.value)}
        />
    </SearchBarWrapper>  

    
    <DrinkResults>
    
            {searchData.map((o,i)=>(
              sWidth>600?
              <DrinkCardUIStatic 
                  onClick={()=>router.push(`/search/${o.idDrink}`)}
                  key={i} 
                  name={o.strDrink} 
                  imgSrc={o.strDrinkThumb}
                  tag={o.strCategory}
                  onFavClick={()=>{handleFavs(o,i)}}
                  favCol={clicked ===i?'#FF3549':null}
              /> : 
              <DrinkCardMobile
                  key={i} 
                  name={o.strDrink} 
                  imgSrc={o.strDrinkThumb} 
                  tag={o.strCategory}
                  onClick={()=>router.push(`/search/${o.idDrink}`)}
                  onFavClick={()=>{handleFavs(o,i)}}
                  favCol={clicked ===i?'#FF3549':null}
              /> ))}
              
    </DrinkResults>
    
      
    {/* <div> */}
            <Pagination
              array={butt_arr}
              curPage={curPage}
              onClick={(o)=>{inputFilter(keyword,o)}}
              />
    {/* </div> */}



        
    </Wrapper>
)
}
