import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { Wrapper, EventWrapper, EventContentCont, DrinkResults } from "@/styles/styles";
import Dropzone from "@/comps/DrinksDropZone";
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend';
import NavBar from "@/comps/NavBar";
import { useSearch } from '../utils/provider'
import { search_types } from '@/utils/variables';
import DrinkCardUI from "@/comps/DrinkCard";
import ax from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { EventCard } from "@/comps/EventCard";

var timer = null

export default function Sockets() {

  const [mySoc, setMySoc] = useState(null)
  const [msgs, setMsgs] = useState([])
  const [txt, setTxt] = useState()
  const [searchData, setSearchData] = useState([]);
  const {search, setSearch} = useSearch()
  const [drink, setDrink] = useState({})
  
  const inputFilter = async (value) =>{

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
          searchBy: search_types[search]
        }
      })
  
      // console.log(res.data)
      // store the data in a state for mapping
      setSearchData(res.data)  
    }, 2000)
  
  }
  const HandleUpdateDrink = (id, drinkpos) =>{
    drink[id] = {
      ...drink[id],
      ...drinkpos
    }

    setDrink({
      ...drink
    })
    
  }
  


 
  useEffect(()=>{
    const socket = io("http://localhost:8888");

    socket.on("joined", (id, txt)=>{
      // alert(`${id} says ${txt}`)
      
      /*
      
      const new_msgs = [
        ...msgs,
        `${id} says ${txt}`
      ]
      setMsgs(new_msgs)

      EQUIVALENT TO BELOW
      */ 
     
      setMsgs((prev)=>[
        ...prev,
        `${id} says ${txt}`
      ])


    })

    setMySoc(socket);
    }, [])
  
    const EmitToIo = async () =>{
      //mySoc to emit
      if (mySoc !== null){
        mySoc.emit("user_ready", txt)
      }
    }
    
    

    // console.log('this is drink',drink)
  
    return (
    <Wrapper>
      <NavBar/>
      <EventWrapper>
        <DndProvider 
          backend={TouchBackend} options={{
          enableTouchEvents:false,
          enableMouseEvents:true
        }}
        >
          <EventContentCont>
            <input onChange={(e)=>inputFilter(e.target.value)}></input>
            <h4> searching by {search} filter </h4>
     
            <DrinkResults>
                  {searchData.map((o,i)=><DrinkCardUI 
                  key={i} 
                  name={o.strDrink} 
                  imgSrc={o.strDrinkThumb}
                  onCardDrag={()=>{console.log(o)}}
                  >

                  </DrinkCardUI>)}
            </DrinkResults>
          </EventContentCont>

          <EventContentCont>
  

            <EventCard
            onInputChange={(e)=>
            setTxt(e.target.value)}
            onButtClick={EmitToIo}
            descrip={msgs}
            />

            <Dropzone
            onDropItem={(item)=>{
           
            const drink_id = uuidv4()
            console.log(item)
            setDrink((prev)=>({
                ...prev,
                [drink_id]:{id:drink_id},
              }
              ))
            }}
            >
               {Object.values(drink).map(o=><DrinkCardUI 
                type='' 
                // name={o.strDrink} 
                // imgSrc={o.strDrinkThumb}
                key={o.id}
                drinkpos={o.pos}
                onUpdateDrink={(obj=>HandleUpdateDrink(o.id, obj))}

                >
            {o.id}
            </DrinkCardUI>
            )}
            </Dropzone>
          </EventContentCont>

        </DndProvider>
      </EventWrapper>
    </Wrapper>
  )
}
