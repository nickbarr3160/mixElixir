import react,{useState,useEffect} from 'react';
import ax from 'axios'
import { useRouter } from 'next/router';

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
    SignupCont,
    SignupLink

} from '@/styles/styles';


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
    if(res.data[0]==201)
    {
        router.push('/home')
        localStorage.setItem('user',JSON.stringify(res.data[1]))
    }
    else  alert('wrong credentials')
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
                <SignupCont> 
                    Not a user? 
                    <SignupLink 
                        onClick={()=>router.push('/signup')} > 
                        Creat an account 
                    </SignupLink> 
                </SignupCont>
            </AuthButtonCont>
            
        </AuthCont>
    </AuthWrapper>
)
}
