import React from 'react'
import "./LeftSection.css"

const LeftSection = () => {
  return (
    <div className='LeftSection-container'>
      <div className="left-row">
        <div className="left-item">
          <img src="https://zerodha.com/static/images/products-kite.png" alt="" />
        </div>
        <div className="right-item">
          <h2>
          Kite</h2>
          <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
         <div className="left-blue-text">
          <a href="">Try Demo </a>
          <a href="">Learn More</a>
         </div>
         <div className="left-imgages">
          <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="" />
          <img src="https://zerodha.com/static/images/appstore-badge.svg" alt="" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
