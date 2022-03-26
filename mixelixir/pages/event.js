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
import { NavigationHam } from "@/comps/NavigationHam";
import { DrinkDragCardMobile } from "@/comps/DrinkCardDragMobile";

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
  const [user, setUser] = useState()
  const [sWidth, setSwidth] = useState()


  //Grab the screen size and store it in a state
  useEffect(()=>{
      setSwidth(window.innerWidth)
      window.onload=()=>{setSwidth(window.innerWidth)}
      window.onresize=()=>{
      setSwidth(window.innerWidth)
  }
  },[sWidth])

  //Generate searched drinks
  const inputFilter = async (value) =>{
   
    if (timer){
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
      
    // store the data in a state for mapping
    setSearchData(res.data.result)  
    }, 500)
  
  }
  
  useEffect(()=>{
    
    const socket = io("https://mixelixirsocket.vercel.app/")
  
    
    // Retrieval of User Information
    var userInfo=JSON.parse(window.localStorage.getItem('user'))
   
    if(userInfo!=null){
        setUser(userInfo.user.username)
    }
    
    //Upon recieval  of server response  
    socket.on("joined", (id, txt,)=>{ 
      setMsgs(`${user && user} says ${txt}`)
    }),
    
    
    //If the drink is not in its original state populate with the item and set it to it's previous state plus the new incoming change upon every drop in the dropzone
    socket.on("dropped", (item)=>{  
        const drink_id = uuidv4()
        if (drink!={}){
          setDrink({
          ...drink,
          [drink_id]:{obj:item}
          })
      }
    })
  
    setMySoc(socket);

  },[drink, user])

  
    //sending the user suggestion and user to server
    const EmitToIo = async () =>{
      //mySoc to emit
      if (mySoc !== null){
        mySoc.emit("user_ready", txt, user!= undefined && user)
      }
    }
    
    //sending the dropped drink to the server
    const EmitDrinkToIo = async (item) =>{
      const socket = io("https://mixelixirsocket.vercel.app/")
      if (socket !== null){
        socket.emit("dropped_drink", item)
      }
    }
    
  
    if(sWidth<600){
      return (
        <Wrapper>
          
          <NavigationHam
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<MdDarkMode size="2em" color="#FF3549"/>:<BsSunFill size="2em" color="white" />}
      />
          
            <EventCard
            onInputChange={(e)=>
            setTxt(e.target.value)}
            onButtClick={EmitToIo}
            descrip={msgs}
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
                      {searchData.map((o,i)=><DrinkDragCardMobile 
                      item={o}
                      key={i} 
                      name={o.strDrink} 
                      imgSrc={o.strDrinkThumb}
                      tag={o.strCategory}
                      >
    
                      </DrinkDragCardMobile>)}
                </DrinkResults>
    
              </EventInputContentCont>
    
              <EventContentCont>
    
                <Dropzone 
                dropMessage={dropMessage}
                onDropItem={(item)=>{
                  EmitDrinkToIo(item)
                  setDropMessage(null)
                  }}>
                  {Object.values(drink).map(o=><DrinkDragCardMobile 
                    type='' 
                    name={o.obj.strDrink} 
                    imgSrc={o.obj.strDrinkThumb}
                    key={o.id}
                    drinkpos={o.pos}
                    tag={o.obj.strCategory}
                    display="flex"
                    >
    
                    {o.id}
                  </DrinkDragCardMobile>
                  )}
                </Dropzone>
              </EventContentCont>
    
            </DndProvider>
          </EventWrapper>
        </Wrapper>
        )
    
    }
    
  
    else{
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
                >

                {o.id}
              </DrinkCardUIDrag>
              )}
            </Dropzone>
          </EventContentCont>

        </DndProvider>
      </EventWrapper>
    </Wrapper>
    )

}
}