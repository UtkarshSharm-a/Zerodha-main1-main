import React from 'react'
import "./RIghtSection.css"

const RightSection = () => {
  return (
    <div className='Right-container'>
      <div className="Right-row">
        <div className="Right-left">
          <h1>Console</h1>
          <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
          <a href="">Learm more</a>
        </div>
        <div className="Right-Right">
          <img src="https://zerodha.com/static/images/products-console.png" alt="" />
        </div>
      </div>
      <div className="Right-row2">
        <div className="Right-left">
          <h1>Coin</h1>
          <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
          <a href="">Learm more</a>
          <div className="Right-left-img">
            <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="" />
            <img src="https://zerodha.com/static/images/appstore-badge.svg" alt="" />
          </div>
        </div>
        <div className="Right-Right2">
          <img src="https://zerodha.com/static/images/products-coin.png" alt="" />
        </div>
      </div>
      <div className="Right-row3">
        <div className="Right-left">
          <h1>Kite Connect API</h1>
          <p>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
          <a href="">kite connect</a>
        </div>
        <div className="Right-Right">
          <img src="https://zerodha.com/static/images/products-kiteconnect.png" alt="" />
        </div>
      </div>
      <div className="Right-row4">
        <div className="Right-left">
          <h1>Varsity mobileCoin</h1>
          <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
          <a href="">Learm more</a>
          <div className="Right-left-img">
            <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="" />
            <img src="https://zerodha.com/static/images/appstore-badge.svg" alt="" />
          </div>
        </div>
        <div className="Right-Right2">
          <img src="https://zerodha.com/static/images/varsity-products.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default RightSection
