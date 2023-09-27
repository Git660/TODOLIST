'use client'
import {React,useState} from 'react'

const page = () => {
  const [name, setname] = useState("JHON")
  

  return (
    <div>
      <form>
<input type="text" placeholder='enter the name 'value={name} name='username' onChange={(e)=>{
 setname( e.target.value)
  
}}/>



      </form>
<h1>  {name}  </h1>
{/* <button onClick={()=>sumbitHandler("it worked")}> changename</button> */}

    </div>
  )
}

export default page