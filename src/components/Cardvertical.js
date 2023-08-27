import React from 'react'
export const Cardvertical = (props) => {
  return (
    <div className='recom'>
    <img className='image3' src={props.imgsrc1} alt='' />
    <div className='details'>
       <div className='info'>
        <h1 className='hc1'>{props.title}</h1>
        <h2 className='hc2'>{props.channel}</h2>
        <span className='sp'>{props.view}</span>
       </div>
    </div>
    </div>
  )
}
