import React from 'react'
import Topheader from '../component/Topheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {

 const navigate = useNavigate()

    async function handleLogin(e){
      e.preventDefault()
  
       let form = new FormData(e.currentTarget)
      
       await axios.post("https://otide.pythonanywhere.com/login/", form)
       .then((res)=> {
        localStorage.setItem("user",JSON.stringify(res.data))
        alert("login successful")
        navigate("/")
       })
       .catch((err)=> {
        if (err?.response?.data === "Invalid credentials"){
          alert("Invalid Credentials")
        } 
        else{
        for (let i in err?.response?.data){
          alert(i + ""+ err?.response?.data[i])
        } }
      })
    }
    return(
      <div>
        <Topheader/>
      
      <form onSubmit={handleLogin}>
      <div className='login w-50 m-auto '>
      <div className="mb-4">
<label htmlFor="" className='form-label'>Email</label>
<input type="email" className='form-control' name='email' />
</div>

<div className="mb-4">
<label htmlFor="" className='form-label'>Password</label>
<input type="password" className='form-control' name='password' />
</div>

    
    <div>
   
      <button type='submit' className='btn btn-primary w-100'>Login</button>
    </div>
      </div>
    </form>
    </div>
    )
}

export default Login