import React from 'react'
import { Card } from './Card'
import cardsData from './cardsData'

export const Home = () => {

  const cards = cardsData.map((card, idx) => {
    return <Card id={idx} imgsrc1={card.imgsrc1} imgsrc2={card.imgsrc2} title={card.title} channel={card.channel} view={card.view} />
  }) 

  return (
    <div className='home'>
     {cards}
    </div>
  )
}
