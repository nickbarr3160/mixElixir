import Link from 'next/link';
import  {useSearch}  from '@/utils/provider';
import styled from 'styled-components'
import react,{useState,useEffect} from 'react';
import ax from 'axios'
import { useRouter } from 'next/router';

//component imports 
import {SearchSelection} from 'comps/SearchSelection'
import NavBar from '@/comps/NavBar';
import { 
  AuthWrapper, 
  AuthCont, 
  AuthInput, 
  AuthLogoCont, 
  AuthLogo, 
  AuthTitleCont, 
  AuthTitle, 
  AuthButton, 
  AuthButtonCont, 
  TextCont,
  CreateAccount
} 
  from '@/styles/styles';



export default function Login() {
    const router = useRouter()
    const [email,setEmail] = useState()
    const [user,setUser] = useState()
    const [pass,setPass] = useState()
    const [token,setToken] = useState()


const handleLogin=async()=>
{
    const res = await ax.post("./api/drinks",{
        email,
        pass,
        login:'logg'
    })
    if(res.status!=500)
    {
        router.push('/home')
        localStorage.setItem('user',JSON.stringify(res.data[1]))
    }
    else if (res.status ===500) alert('error')
}

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
    <AuthWrapper>
        <AuthCont>
            
            <AuthTitleCont>
                <AuthTitle>MixElixir</AuthTitle>
                <AuthLogoCont>
                    <AuthLogo src='/logo.png'/>
                </AuthLogoCont>
            </AuthTitleCont>

            <AuthInput placeholder='Email'    type='text'onChange={(e)=>setEmail(e.target.value)} />
            <AuthInput placeholder='Password' type='password'onChange={(e)=>setPass(e.target.value)}  />
            
            <AuthButtonCont>
                <AuthButton onClick={handleLogin}> LOGIN </AuthButton>
                <TextCont> 
                  Not a user? 
                  <CreateAccount 
                    onClick={()=>router.push('/signup')} 
                    style=
                        {
                          {
                            margin:'1em',
                            color:'#FF3549',
                            cursor:'pointer'
                          }
                        }
                        > 
                    Create an account 
                    </CreateAccount> 
                </TextCont>
            </AuthButtonCont>
            
        </AuthCont>
    </AuthWrapper>
  )
}
