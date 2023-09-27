'use client'
import {React,useState} from 'react'

const page = () => {
  const [name, setname] = useState("JHON")
  const sumbitHandler=(e)=>{
    e.preventDefault();
    setname(e.target.username.value)

  }

  return (
    <div>
      <form onSubmit={sumbitHandler}>
<input type="text" placeholder='enter the name ' name='username'/>
<input type="submit" />


      </form>
<h1>  {name}  </h1>
{/* <button onClick={()=>sumbitHandler("it worked")}> changename</button> */}

    </div>
  )
}

export default page