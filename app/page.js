'use client'
import {React,useState} from 'react'

const page = () => {
  const [name, setname] = useState("JHON")
  const sumbitHandler=(name)=>{
    setname(name)
  }

  return (
    <div>
<h1>  {name}  </h1>
<button onClick={()=>sumbitHandler("it worked")}> changename</button>

    </div>
  )
}

export default page