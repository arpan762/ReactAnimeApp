import React from 'react'
import { Cardvertical } from './Cardvertical'
import { useParams } from 'react-router-dom'
import videoData from './videoData'
import Videom from './Videom'

export const Video = () => {

  const { userId } = useParams()
  const thisService = videoData.find(service => service.id === userId)
  
  const cardsvertical = Videom.map(card => {
    return <Cardvertical imgsrc1={card.imgsrc1} title={card.title} channel={card.channel} view={card.view} />
  }) 

  return (
    <div className='videomain'>
    <div className='content'>
    <div className='videowrapper'>
    <iframe width="100%" height="520" src={thisService.videosrc} title='Mutube Video player' frameBorder='0' 
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen></iframe>
    </div>
      <h1 className='heading'>Test video</h1>
      <div className='details1'>
        <span className='inp'>7,948,154 views . Jun 22, 2022</span>
        <div className='Buttons'>
          <div className='Button'><i class="fa-regular fa-thumbs-up fa-2x"></i>55k</div>
          <div className='Button'><i class="fa-regular fa-thumbs-down fa-2x"></i></div>
          <div className='Button'><i class="fa-solid fa-share fa-2x"></i>Share</div>
          <div className='Button'><i class="fa-solid fa-cart-plus fa-2x"></i>Save</div>
        </div>
      </div>
      <hr />
    </div>
    <div className='recom1'>
     {cardsvertical}
    </div>
    </div>
  )
}
