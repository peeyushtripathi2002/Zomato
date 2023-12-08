import React, { useState } from 'react'
function Todoolist() {
    const [data,SetData]=useState()
const [input,SetInput]=useState([])
const fun1=(e)=>{
  SetData(e.target.value)
}
const fun2=()=>{
  SetInput([...input,data])
  SetData('')
}
const fun3=(index)=>{
  console.log(index)
  let NewArr=input.filter((ele,id)=>{
    return id!==index
  })
  SetInput(NewArr)
}
  return (
    <div>
        <h1>To input list</h1>
   <input name='data' value={data} onChange={fun1} type="text" placeholder='Enter Your name'/>
   <button onClick={fun2}>add</button>
   {
    input.map((res,index)=>{
      console.log(index)
      return(<div>
        <li>{res}</li>
        <button onClick={()=>{fun3(index)}}>delet</button>
      </div>)
    })
   }
    </div>
  )
}

export default Todoolist