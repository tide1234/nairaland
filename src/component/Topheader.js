import React from 'react'
import { Link } from 'react-router-dom'


function Topheader() {
  return (
   <div className="topheader card ">
    <img src="../../logo1.png" alt="" className="logo card-img-top" />
    <p className=' text-center'>Welcome, &nbsp;  
         <strong>Guest:</strong> &nbsp;
     <Link to ="/Signup"> Register on Nairaland</Link> &nbsp;
     <span>/</span> &nbsp;
      <Link to ="/Login">LOGIN!</Link>  &nbsp;
      <span>/</span> &nbsp;
      <Link>Trending</Link> &nbsp; 
      <span>/</span> &nbsp;
     <Link>Recent</Link> &nbsp;
     <span>/</span> &nbsp;
     <Link to= "/create">Create</Link></p>
     <p className=' p1 text-center'>
        <strong>stats:</strong> &nbsp;
        <span>3,066,959 members, 7,542,676 topics. </span>
        <strong>Date:</strong>
        <span> Thursday 17, August 2023 at 17:08 PM</span>
     </p>
    <div className="container">
    <div className="d-flex">
    <input type="text" className="form-control m-2" />
    <button className="btn btn-outline-dark mb-1 ">search</button>
    </div>
    </div>
   </div>
  )
}

export default Topheader