import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function ZomatoCard() {
  return (
  <div className='container'>
    <div className='row'>
      <div className='col-lg-4'> 
        <div className='im1'>
        <img className='img1' src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'></img>
        <h2>Order online</h2>
        <p>home and order at your </p>
        </div>
      </div>
      
      <div className='col-lg-4'>
        <div className='im2'>
        <img className='img2' src='https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'></img>
        <h2>Dining</h2>
        <p>city's best dining spot</p>
        </div>
      </div>

      <div className='col-lg-4'>
        <div className='im3'> 
        <img className='img3' src='https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*'></img>
        <h2>Night clubs</h2>
        <p> city's best clubs</p>
        </div>
      </div>

    </div>
  </div>
  )
}

export default ZomatoCard