import React from 'react'

function Peeyush(a) {
    let isBool=false
    let user='Peeyush'
  return (
    <div>
        <p>{a.key1}</p>
        <h4>{a.nam1}</h4>
        <p>{a.user}</p>
        {/* <h1>hello,{isBool?user:'Chetan'}</h1> */}
        <h2>{isBool?a.nam1:a.user}</h2>
    </div>
  )
}

export default Peeyush