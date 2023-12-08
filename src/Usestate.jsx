import React,{useState} from 'react'

function Usefect() {
    let[pass,SetSimla]=useState()
    const fun1=()=>{
        SetSimla('Simla is a plase')
    }
  return (
    <div><p>{pass}</p>
        <button onClick={fun1}>Simla</button>
        <button>Manali</button>
        <button>JK</button>
    </div>
  )
}

export default Usefect