import React from 'react'
import {useState , useEffect} from "react" ;
import {Link , useNavigate} from "react-router-dom" ;
import LoginImg from "../images/login-image.png" ;
import Logo from "../images/Dr.Robot logo.jpeg"
const Login = () => {
    const [email , setEmail] = useState('') ;
    const [password , setPassword] = useState('') ;
    const [phone , setPhone] = useState('') ;
    const navigate = useNavigate() ;
    async function handleSubmit(e) {
        e.preventDefault() ;
    }
    return (
        <div className='login-container'>
        <div className='img-container'>
        <div className='welcome-txt'>Welcome</div>
        <div className='col-sm-6'><img src={LoginImg} alt=""/></div>
        <div className='signup-footer'>Join Us Now , And Enjoy 24/7 <br/> Medical Assistant to take care of your Wellness</div>
    </div>
    <div className='form col-sm-6'>
        <div className='logo'>
            <img src={Logo} alt="logo" width={100}/>
        </div>
        <form onSubmit={handleSubmit} method='post'>
            <div className='col-sm-12 mt-3 rest-inputs'>
                <input type="email"  name="email" value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                    placeholder='Enter your email'
                /> <br/> <br/>
                <input type="password" name="password" 
                    placeholder='Enter your password' value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                /> <br/> <br/>
            </div>
            <button type="submit" className='login-btn mb-3'>Login</button>
            </form>
            <span className='my-2'>Not Have Account Yet ? <Link to={"/signup"}>Signup</Link> </span>
    </div>
        </div>
    )
}

export default Login
