import Link from 'next/link';
import  {useSearch}  from '@/utils/provider';
import {SearchSelection} from 'comps/SearchSelection'
import styled from 'styled-components'
import { SettingsWrapper } from '@/styles/styles';
import NavBar from '@/comps/NavBar';
import react,{useState,useEffect} from 'react';
import ax from 'axios'
import { useRouter } from 'next/router';
import { isExpired, decodeToken } from "react-jwt";
import { useJwt } from "react-jwt";


export default function Login() {
    const router = useRouter()
    const [email,setEmail] = useState()
    const [user,setUser] = useState()
    const [pass,setPass] = useState()
    const [token,setToken] = useState()
    // const { decodedToken, isExpired } = useJwt(token!=null && token);



const handleLogin=async()=>
{

    const res = await ax.post("./api/drinks",{
        email,
        pass,
        login:'logg'
    })
    // if(res.data[0] == 201)
    // {
        router.push('/')
        // console.log(res.data)
        localStorage.setItem('user',JSON.stringify(res.data[1]))
    // }


    // const myDecodedToken = decodeToken(res.data[1]);
    // console.log(myDecodedToken)
    // console.log(localStorage)

}

// console.log(decodedToken)

const handleSignup=async()=>
{
    try{
        const res = await ax.post("./api/drinks",{
        user,
        email,
        pass,
        signup:'sign'})
    }
    catch(err){console.log(err, 'request failed to execute')}
}






return (
    <SettingsWrapper>
        <input placeholder='Username' type='text'onChange={(e)=>setUser(e.target.value)} />
        <input placeholder='Email'    type='text'onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder='Password' type='text'onChange={(e)=>setPass(e.target.value)}  />
        <button onClick={handleLogin} > LOGIN </button>
        <button onClick={handleSignup}> SIGN-UP </button>
    </SettingsWrapper>
  )
}
