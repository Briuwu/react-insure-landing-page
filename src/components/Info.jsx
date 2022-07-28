import React from 'react'
import { infoData } from '../data/infoData'

const Info = () => {
  return (
    <div className='container info'>
      <p className="info-title">We're different</p>
      <div className='info-items'>
      {infoData.map((item, index) => (
        <div className='info-items-each' key={index}>
          <img src={item.img} alt={item.img} className="info-items-img" />
          <p className="info-items-title">{item.title}</p>
          <p className="info-items-desc">{item.desc}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Info