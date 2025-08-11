import React from 'react'
import "./Education.css"

const Education = () => {
  return (
    <div className='Edu-container'>
      <div className="Edu-row">
        <div className="Edu-left">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="Edu-right">
          <h2>Free and open market education </h2>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="">varsity<i class="fa-solid fa-arrow-right"></i></a>
          <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
         <a href="">TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education
