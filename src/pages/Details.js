import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Details() {

  const [detail, setDetail] = useState(null)

  const {id} = useParams()

  useEffect(()=>{
    axios.get(`https://otide.pythonanywhere.com/getarticle/${id}`)
    .then((res)=> setDetail(res.data))
    .catch((err)=>console.log(err))
  }, [id])

  // const info = contents.find ((a=> a?.id == id))
 
  return (
     <div>
      <h1 className='text-center'>{detail?.title}</h1>
      <p className='text-primary fst-italic' dangerouslySetInnerHTML={{__html: detail?.descriptiion}}></p>
       <img src={`https://otide.pythonanywhere.com/${detail?.image}`} alt={detail?.title} />
       <img src={`https://otide.pythonanywhere.com/${detail?.other}`} alt={detail?.title} />
     </div>
  )
}

export default Details