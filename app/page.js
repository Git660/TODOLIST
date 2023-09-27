'use client'
import {React,useState} from 'react'

const page = () => {
  const [name, setname] = useState("JHON")
  const sumbitHandler=()=>{
    setname("JHHONVICK")
  }

  return (
    <div>
<h1>  {name}  </h1>
<button onClick={sumbitHandler}> changename</button>

    </div>
  )
}

export default page