import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { Wrapper, EventWrapper, EventContentCont, DrinkResults, EventInput, EventInputContentCont} from "@/styles/styles";
import Dropzone from "@/comps/DrinksDropZone";
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend';
import NavBar from "@/comps/NavBar";
import { useSearch, useTheme } from '../utils/provider'
import { search_types } from '@/utils/variables';
import ax from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { EventCard } from "@/comps/EventCard";
import DrinkCardUIDrag from '../comps/DrinkCardDrag'
import {BsSunFill} from 'react-icons/bs';
import {MdDarkMode} from 'react-icons/md';
var timer = null

export default function Sockets() {

  const [mySoc, setMySoc] = useState(null)
  const [msgs, setMsgs] = useState([])
  const [txt, setTxt] = useState()
  const [searchData, setSearchData] = useState([]);
  const {search, setSearch} = useSearch()
  const [drink, setDrink] = useState({})
  const {theme, setTheme} = useTheme()
  const [dropMessage, setDropMessage] = useState("Drop Drinks Here")
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
  
  useEffect(()=>{
    
      const socket = io("http://localhost:8888")
    
      socket.on("joined", (id, txt,)=>{      
     
      setMsgs((prev)=>[
        ...prev,
        `${id} says ${txt}`
      ])

      }),
    
      socket.on("dropped", (item)=>{
      const drink_id = uuidv4()
      // var dropped=[]
      // dropped.push(item)
      // setDroppedInfo(...droppedInfo,item)

      
      setDrink((prev)=>({
        ...prev,
        [drink_id]:{obj:item},
      }
      ))
      console.log(drink)
      })
    
    
    
    
    setMySoc(socket);
  },[])
  
    const EmitToIo = async () =>{
      //mySoc to emit
      console.log(mySoc)
      if (mySoc !== null){
        mySoc.emit("user_ready", txt,)
        console.log(mySoc, '========')
      }
    }
    
    const EmitDrinkToIo = async (item) =>{
      const socket = io("http://localhost:8888")
      // console.log(socket)
      if (socket !== null){
        socket.emit("dropped_drink", item)
      }
    }
    
  
    return (
    <Wrapper>
      
      <NavBar
      themeToggle={()=>setTheme(
      theme=== 'light'?'default':'light')}
      icon={theme==='light'?<MdDarkMode  size="1.5em"/>:<BsSunFill size="1.5em"/>}
      />
      
      <EventWrapper>
        <DndProvider 
          backend={TouchBackend} options={{
          enableTouchEvents:false,
          enableMouseEvents:true
        }}
        >
          <EventInputContentCont>
            
            <EventInput 
            placeholder="Search for drinks to add to the menu" 
            onChange={(e)=>inputFilter(e.target.value)}>
            </EventInput>
            
            
     
            <DrinkResults>
                  {searchData.map((o,i)=><DrinkCardUIDrag 
                  item={o}
                  key={i} 
                  name={o.strDrink} 
                  imgSrc={o.strDrinkThumb}
                  tag={o.strCategory}
                  // onCardDrag={()=>{console.log(o)}}
                  >

                  </DrinkCardUIDrag>)}
            </DrinkResults>

          </EventInputContentCont>

          <EventContentCont>
  

            <EventCard
            onInputChange={(e)=>
            setTxt(e.target.value)}
            onButtClick={EmitToIo}
            descrip={msgs}
            />

            <Dropzone 
            dropMessage={dropMessage}
            onDropItem={(item)=>{
              // handleDrop(item)
              EmitDrinkToIo(item)
              setDropMessage(null)
              }}>
              {Object.values(drink).map(o=><DrinkCardUIDrag 
                type='' 
                name={o.obj.strDrink} 
                imgSrc={o.obj.strDrinkThumb}
                key={o.id}
                drinkpos={o.pos}
                tag={o.obj.strCategory}
                onUpdateDrink={(obj=>HandleUpdateDrink(o.id, obj))}
                >

            {o.id}
            {/* {o.strDrink} */}
            </DrinkCardUIDrag>
            )}
            </Dropzone>
            {/* <button onClick={EmitDrinkToIo}>Save Dropped Drinks for others to see!</button> */}
          </EventContentCont>

        </DndProvider>
      </EventWrapper>
    </Wrapper>
  )
}
