import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import ax from 'axios'

// component imports
import DrinkCardUI from '@/comps/DrinkCard'

export default function Drink  () {
    const router  = useRouter()
    const {id} = router.query
    const [data,setData] = useState({})
    
    useEffect(()=>{
        if(id)
        {
            const GetDrink = async()=>
            {
                const res = await ax.get("/api/drinks",{
                    params:{
                        d_id:id
                    }
                })
                
                setData(res.data[0])

            }
            GetDrink()
            // console.log(data)

        }
    },[id])

  return (
    <div>  
        <DrinkCardUI 
            name={data.strDrink} 
            imgSrc={data.strDrinkThumb}>
    </DrinkCardUI> 
    </div>
  )
}
