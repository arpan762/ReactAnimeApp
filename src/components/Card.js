import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Card = (props) => {
   const navigate = useNavigate();
  return (
    <div className='card' style={{textDecoration:"none",color:"inherit"}} onClick={() => {navigate(`/Videos/${props.id + 1}`)}}>
    <img className='image1' src={props.imgsrc1} alt='' />
    <div className='details'>
       <img className='image2' src={props.imgsrc2} alt='' />
       <div className='info'>
        <h1 className='hc'>{props.title}</h1>
        <h2 className='hs'>{props.channel}</h2>
        <p className='p1'>{props.view}</p>
       </div>
    </div>
    </div>
  )
}
