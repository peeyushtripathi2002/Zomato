import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Signup() {
  const[input,SetInput]=useState({
    username:'',
    userlastname:'',
    useremail:'',
    password:''
  })
  const fun1=(e)=>{
    let{name,value}=e.target
    SetInput({...input,[name]:value})
    console.log(input)
  }
  return (
    <div id="main"><h1>Signup Form</h1>
        <input value={input.username} name='username' type="text" placeholder='Enter your name'onChange={fun1} />
        <input value={input.userlastname} name='userlastname' type="text" placeholder='Enter your last name'onChange={fun1}/>
        <input value={input.useremail} name='useremail' type="email" placeholder='Enter your email'onChange={fun1}/>
        <input value={input.password} name='password' type="password" placeholder='Enter your password'onChange={fun1}/>
        <button>Signup</button>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Signup