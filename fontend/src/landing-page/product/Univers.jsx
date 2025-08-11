import React from 'react'
import "./Univers.css"

const Univers = () => {
  return (
    <div className='Univers-Container'>
      <div className='row-container'>
        <div className="row-top-container">
          <h1>The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>

        <div className="zerodha-univers-bottom-img-text">
          <div className="zerodha-img">
            <img src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" alt="" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
          <div className="zerodha-img">
            <img src="https://zerodha.com/static/images/products/sensibull-logo.svg" alt="" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
          <div className="zerodha-img">
            <img src="https://zerodha.com/static/images/partners/tijori.svg" alt="" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>    <div className="zerodha-img">
            <img src="https://zerodha.com/static/images/products/streak-logo.png" alt="" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div> 
             <div className="zerodha-img">
            <img src="https://zerodha.com/static/images/products/smallcase-logo.png" alt="" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
          <div className="zerodha-img">
            <img src="https://zerodha.com/static/images/products/ditto-logo.png" alt="" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
        </div>
        <div className="Univer-button">
        <button className='Univer-btn'>Sign up for free</button>
        </div>
      </div>
    </div>
  )
}

export default Univers
