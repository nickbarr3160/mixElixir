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
  
  const [droppedInfo, setDroppedInfo] = useState([])
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
    }, 500)
  
  }
  
const handleDrop=(item)=>
{
            const drink_id = uuidv4()
            var dropped=[]
            dropped.push(item)
            setDroppedInfo(...droppedInfo,item)
            console.log(dropped)

            setDrink((prev)=>({
                ...prev,
                [drink_id]:{obj:item  },
                // item
              }
              ))
              console.log(drink)
            // setDrink(...drink,drink.push(item))
}

 
  // useEffect(()=>{
  //   const socket = io("http://localhost:8888");

  //   socket.on("joined", (id, txt)=>{
  //     // alert(`${id} says ${txt}`)
      
  //     /*
      
  //     const new_msgs = [
  //       ...msgs,
  //       `${id} says ${txt}`
  //     ]
  //     setMsgs(new_msgs)

  //     EQUIVALENT TO BELOW
  //     */ 
     
  //     setMsgs((prev)=>[
  //       ...prev,
  //       `${id} says ${txt}`
  //     ])


  //   })

  //   setMySoc(socket);
  //   }, [])
  
  //   const EmitToIo = async () =>{
  //     //mySoc to emit
  //     if (mySoc !== null){
  //       mySoc.emit("user_ready", txt)
  //     }
  //   }
    
    

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
                  item={o}
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
            // onButtClick={EmitToIo}
            descrip={msgs}
            />

            <Dropzone onDropItem={(item)=>{handleDrop(item)}}>
              {Object.values(drink).map(o=><DrinkCardUI 
                type='' 
                name={o.obj.strDrink} 
                imgSrc={o.obj.strDrinkThumb}
                key={o.id}
                drinkpos={o.pos}
                onUpdateDrink={(obj=>HandleUpdateDrink(o.id, obj))}
                >

            {o.id}
            {/* {o.strDrink} */}
            </DrinkCardUI>
            )}
            </Dropzone>
          </EventContentCont>

        </DndProvider>
      </EventWrapper>
    </Wrapper>
  )
}
