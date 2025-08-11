import React from 'react'
import "./Prising.css"

const Prising = () => {
  return (
    <div className='prising-container'>
      <div className="prising-row">
        <div className="prising-left">
          <h1>Unbeatable pricing
          </h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
         <a href="">see pricing<i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="prising-right">
          <div className="prising-img1">
            <img className='img-1' src="media/images/pricing0.svg" alt="" />
            <p> Free account
            opening</p>
          </div>
          <div className="prising-img1">
            <img className='img-1' src="media/images/pricing0.svg" alt="" />
            <p> Free account
            opening</p>
          </div>
          <div className="prising-img1">
            <img className='img-1' src="media/images/intradayTrades.svg" alt="" />
            <p> Free account
            opening</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prising
