'use client'
import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  styles  from './page.module.css'
import { title } from 'process'

const page = () => {
  const [Title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [state, setstate] = useState("")
  const createtask=(e)=>{
    e.preventDefault();
    const details={
      Title,desc,state
    }
  

console.log(details)


  }

  return (
    <div >
    <form   className={styles.frm}   >

<h1>TITLE......</h1>
    <input type="text" placeholder='title'  onChange={(e)=>{ settitle(e.target.value)}}  style={{resize:"none"}}/>
    <br />
    <br />
    <h1>DESCRIPTION</h1>
    <textarea    className={styles.txt} style={{resize:"none"}} onChange={(e)=>{  setdesc(e.target.value)}}>
      
    </textarea>
    <br />
    <br />
    {/* Remove the defaultValue prop from the select element */}
    <h1>STATE</h1>
    <select name="state" id=""  onChange={(e)=>{setstate(e.target.value)}}>
<option value="Due">Due</option>
<option value="pending">pending</option>
<option value="Complete">Complete</option>
</select>

    <br />
    <br />
  
    <div className={styles.btns}>
      <button className={styles.ct} onClick={createtask}>CREATE TASK</button>
      <button className={styles.ut}>UPDATE TASK</button>

    </div>
  </form>
  </div>
  )
}

export default page