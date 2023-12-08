import React from 'react'
import './App.css'
import {Link}from 'react-router-dom'
const Nbr = () => {
  return (
    <div id="main">
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Nbr

