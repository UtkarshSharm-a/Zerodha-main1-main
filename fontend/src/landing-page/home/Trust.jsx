import React from 'react'
import "./Trust.css"

const Trust = () => {
  return (
    <div className='container trustContainer'>
      <div className="trust-row">
        <div className="left-half">
          <img src="media/images/largestBroker.svg" alt="" />

        </div>
        <div className="right-half">
          <h1 className='right-h1'>Largest stock broker in india</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ullam aliquam porro assumenda delectus quia a animi quas ad ab?</p>
          <div className="list">
            <div className="left-list">
              <ul>
                <li>Future and Optino</li>
                <li>Commoditive derivatives</li>
                <li>Currency and derivatives</li>
              </ul>
            </div>
            <div className="right-list">
            <ul>
                <li>Stock & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Go</li>
              </ul>
            </div>
          </div>
          <img className='trust-img' src="media/images/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Trust
