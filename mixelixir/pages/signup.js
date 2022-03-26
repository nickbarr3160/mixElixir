import Link from 'next/link';
import  {useSearch}  from '@/utils/provider';
import {SearchSelection} from 'comps/SearchSelection'
import styled from 'styled-components'
import { AuthWrapper, AuthCont, AuthInput, AuthLogoCont, AuthLogo, AuthTitleCont, AuthTitle, AuthButton, AuthButtonCont } from '@/styles/styles';
import NavBar from '@/comps/NavBar';
import react,{useState,useEffect} from 'react';
import ax from 'axios'
import { useRouter } from 'next/router';



export default function Login() {
    const router = useRouter()
    const [email,setEmail] = useState()
    const [user,setUser] = useState()
    const [pass,setPass] = useState()
    const [token,setToken] = useState()


// const handleLogin=async()=>
// {
//     const res = await ax.post("./api/drinks",{
//         email,
//         pass,
//         login:'logg'
//     })
//         router.push('/')
//         localStorage.setItem('user',JSON.stringify(res.data[1]))
// }

const handleSignup=async()=>
{
    try{
        const res = await ax.post("./api/drinks",{
        user,
        email,
        pass,
        signup:'sign'})
        router.push('/')
    }
    catch(err){console.log(err, 'request failed to execute')}
}

return (
    <AuthWrapper>
        <AuthCont>
            
            <AuthTitleCont>
                <AuthTitle>MixElixir</AuthTitle>
                <AuthLogoCont>
                    <AuthLogo src='/mix.svg'/>
                </AuthLogoCont>
            </AuthTitleCont>

            <AuthInput placeholder='Username' type='text'onChange={(e)=>setUser(e.target.value)} />
            <AuthInput placeholder='Email'    type='text'onChange={(e)=>setEmail(e.target.value)} />
            <AuthInput placeholder='Password' type='text'onChange={(e)=>setPass(e.target.value)}  />
                
            <AuthButtonCont>
                <AuthButton onClick={handleSignup}> SIGN-UP </AuthButton>
            </AuthButtonCont>

            
        </AuthCont>
    </AuthWrapper>
  )
}
