import React, { useEffect, useState } from 'react'
const UseEffect = () => {
  const [data,SetData]=useState([])
  const fun2=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then((res)=>{
      return res.json()
    }).then((d)=>{
      console.log(d)
      SetData(d)
    })
  }
  useEffect(()=>{
    console.log('hello')
    fun2()
  },[])
  return (
    <div>
{
  data.map((r)=>{
    return(<>
<li> {r.title}</li>
    </>)
  })
}
    </div>
  )
}
export default UseEffect
