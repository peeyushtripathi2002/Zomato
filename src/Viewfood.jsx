import React from 'react'
import { NavLink } from 'react-router-dom'
import arr from './Viewcard'
function Viewfood() {
  const Logo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
  return (
    <div  style={{backgroundColor:'aqua'}}>
      <h1>Viewfood</h1>
      <div className='container w-75 d-flex justify-content-between align-items-center'>
        <img style={{ width: '9rem' }} src={Logo} />
        <h1>Search here</h1>
      </div>

      <div>
        <form class="container d-flex justify-content-center align-items-center m-2">
          <div class="col-lg-4">
            <input type="text" class="form-control" id="inputPassword2" placeholder="search" />
          </div>
          <div class="col-auto mx-2">
            <button type="submit" class="btn btn-primary mb-3">Search</button>
          </div>
        </form>
      </div>

      <div className='container w-75'>
        <h1 style={{ fontWeight: 400 }}>Best food in the bhopal</h1>
        <div className='row d-flex justify-content-between align-items-center' style={{}}>
{
  arr.map((res)=>{
    return(<>
     <div class="card mt-4" style={{ width: 300 }}>
            <img src={res.img} class="card-img-top" />
            <div class="card-body">
              <p class="card-text">{res.text}</p>
              <a href="#" class="btn btn-primary">{res.sub}</a>
            </div>
          </div>
    </>)
  })
}
        </div>

      </div>
      <NavLink to='/'>Zomato</NavLink>
    </div>
  )
}

export default Viewfood