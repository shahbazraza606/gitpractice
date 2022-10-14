import React from 'react'
import './login.css'
const Login = () => {
    return(
        <div className='login'>
           <h2>LogIn</h2>
        <div className='email'><p>Email </p></div>
        <input type="text" placeholder="khuch likh day bhai" /><br/>
        <div className='pwd'><p>Password</p></div>
        <input type="Password" placeholder="Password" /><br/>
        <button>Submit</button>
        </div>
    )
}
export default Login;