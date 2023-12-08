import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    const[input,SetInput]=useState({
         username:'',
         password:'' })
    const fun1=(e)=>{
        // SetInput(e.target.value)
        let {name,value}=e.target
        SetInput({...input,[name]:value})
        console.log(input)
    }
    // const[data,SetData]=useState('')
    // const fun2=()=>{
    //     SetData(input)
    // }
  return (
    <div id="main">
        <h2>Login form</h2>
        {/* <p>{input}</p> */}
        <input value={input.username} name='username'  type="text" placeholder='Enter your userid' onChange={fun1}/>
        <input value={input.password} name='password' type="password" placeholder='Enter your password' onChange={fun1}/>
        {/* <button onClick={fun1}>Login</button> */}
        <Link to='/signup'>Signup</Link>
    </div>
  )
}
export default Login