import React, {useState, useLayoutEffect, useEffect, useRef} from 'react'
import Topheader from './../component/Topheader'
import axios from 'axios'


function Signup() {
 async function handleSubmit(e){
    e.preventDefault()

     let form = new FormData(e.currentTarget)
    
     await axios.post("https://otide.pythonanywhere.com/signup/", form)
     .then((res)=> {
      alert ("account created successfully")
     })
     .catch((err)=> {
      for (let i in err?.response?.data){
        alert(i + ""+ err?.response?.data[i])
      } 
    })
       
    //  alert (form.get("first_name"))
    //  alert (form.get("last_name"))
    //  alert (form.get("phone"))
    //  alert (form.get("email"))

  }
  // function handleClick(){
  //   alert("hello")
  // }
  const[num, setNum] = useState(0)
   const sel = useRef()
  useEffect(function(){
    // fetch("https://api.openweathermap.org/data/2.5/weather?q=nigeria"+"&appid=9a3589032621f0e47677604e004afed8")
    // .then((res) => res.json())
    // .then((res)=> console.log(res))
//  sel.current.style.backgroundColor = "violet"
  })
 
  // useLayoutEffect(function(){
  //   document.getElementById("test").style.backgroundColor = "red"
  // })
 
  return (
  
   <div className="signup container " >
    <Topheader/>
    <form className="container mt-5" onSubmit={(e) => handleSubmit(e)}>
      <div ref={sel} className="row">
<div className="col-md-6">
<label htmlFor="" className='form-label'>FirstName</label>
<input name= "first_name" type="text" className='form-control'/>
</div>

<div className="col-md-6">
<label htmlFor="" className='form-label'>LastName</label>
<input type="text" className='form-control' name='last_name' />
</div>

<div className="col-md-6">
<label htmlFor="" className='form-label'>Username</label>
<input type="text" className='form-control' name='username' />
</div>

<div className="col-md-6">
<label htmlFor="" className='form-label'>PhoneNumber</label>
<input type="text" className='form-control' name='phone' />
</div>

<div className="col-md-6">
<label htmlFor="" className='form-label'>Email</label>
<input type="email" className='form-control' name='email' />
</div>

<div className="col-md-6">
<label htmlFor="" className='form-label'>Password</label>
<input type="password" className='form-control' name='password' />
</div>

<div className="col-md-6">
<label htmlFor="" className='form-label'>Photo</label>
<input type="file" className='form-control' name='photo' />
</div>


{/* <button type='button' onClick={()=>setNum(num+1)}  className='col-md-12 mt-3 bg-primary btn  text-white fw-bold '>{num}</button> */}
<button type='submit' className='btn-md mt-3 btn-primary mt-4' onClick={()=>setNum(num-1)}>submit</button>
      </div>
    </form>
   </div>
  )
   
}

export default Signup