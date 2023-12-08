import React from 'react'
import './App.css'
import './Zomatocard.css'
import Bg from './image/logo.png'
import ZomatoCard from './ZomatoCard'
import { NavLink } from 'react-router-dom'
function Zometo() {
  return (
    <div>
        <div className='parent'>
            <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"/>
            <div className='Navbar'>
                <div className='Navbar-left'>
                    <span className='text'>HOME</span>
                    <span className='text'> <NavLink to='addr'>Add Restro</NavLink></span>
               </div>
               <div className='Navbar-right'>
                    <span className='text'> <NavLink to='login'>Login</NavLink></span>
                    <span className='text'><NavLink to='signup'>SignUp</NavLink></span>
               </div>
            </div>
        </div>
        <div className='img'>
                <img className='logo' src={Bg} />
               </div>
               <div className='dis'>
               <h2 className='i'>Discover The Best Food &amp; Drinks In Bhopal</h2>
                <input type="text" placeholder="serch restro in bhopal" className="input" />
                <button className='search'>Search</button>
               </div>
        <ZomatoCard/>
    </div>
  )
}
export default Zometo

