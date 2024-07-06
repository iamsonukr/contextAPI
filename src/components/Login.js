import React,{useContext, useState} from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const {setUser}=useContext(userContext)
        
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='username' onChange={e=>setUsername(e.target.value)}/>
        <input type="text" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login