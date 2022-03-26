import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import ax from 'axios'

// styled component imports 
import {Wrapper,} from '@/styles/styles';
import {Suggestions}from '@/styles/IndividualDrinkStyle';

// component imports
import {DrinkInformation } from '@/comps/DrinkInfo';
import DrinkCardUIStatic from '@/comps/DrinkCardStatic'
import NavBar from '@/comps/NavBar';
import { NavigationHam } from '@/comps/NavigationHam';
import { IndDrinkTheme } from "@/utils/variables";
import {useTheme} from '../../utils/provider'

export default function Drink  () {
    const router  = useRouter()
    const {id} = router.query
    const [data,setData] = useState({ingredients:[]})
    const [suggest, setSuggest] = useState([])
    const {theme, setTheme} = useTheme();
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

    useEffect(()=>{
        // if id exists 
        if(id)
        {
            const GetDrink = async()=>
            {
                // make a get request and send in id as params
                const res = await ax.get("/api/drinks",{
                    params:{
                        d_id:id
                    }
                })
                // set data to whatever the request returned 
                setData(res.data[0])

            }
            GetDrink()//calling the function
        }
    },[id])

    // function that sends the ingredients of the drink that was clicked on and putting them in the generate function to display suggestions of the similar drinks
    useEffect(()=>
    {
        const GetRelated = async ()=>
            {
                const res = await ax.get("/api/drinks",{
                    params: 
                    {
                        suggest:data.ingredients
                    }
                })
                
                const temp = res.data.result
                // set suggestions to all the drinks received from the response, but exclude the drink that the user is currently looking at from suggestions.
                if(temp!=undefined)
                {
                    const suggestions = temp.filter(o => o._id != data._id)
                    setSuggest(suggestions)

                }
            }
            GetRelated()
    },[data])

        const handleFavs = async(o)=>
        {
          // console.log(o)
        try{
            const res = await ax.post("./api/drinks",{
            favDrink:o._id,
            user:user.user
            })
        }catch(err){console.log(err, 'request failed to execute')}
        console.log(o)
        }

  return (
    <Wrapper>  
    
        {/* if the screen size is less than 600px */}
        {sWidth<600?<NavigationHam
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<MdDarkMode size="2em" color="#FF3549"/>:<BsSunFill size="2em" color="white" />}
      />: <NavBar
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        />}
    
        <DrinkInformation defaultData={data} />
        {/* drink suggestions */}

        <Suggestions>
            {suggest.map((o,i)=>(
                <DrinkCardUIStatic
                    key={i}
                    tag={o.strCategory}
                    name={o.strDrink} 
                    imgSrc={o.strDrinkThumb}
                    onClick={()=>router.push(`/search/${o.idDrink}`)
                }>
                </DrinkCardUIStatic> 
            
            ))}
        </Suggestions>
    </Wrapper>
)
}
