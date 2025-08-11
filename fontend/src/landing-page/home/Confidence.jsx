import React from 'react'
import "./Confidence.css"

const Confidence = () => {
  return (
    <div className='confi-container'>
      <div className="confi-row">
        <div className="confi-left">
          <h1 className='confi-h1'>Trust with Confidence</h1>
          <div className="confi-2left">
            <h1>Customer-first always</h1>
            <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div className="confi-2left">
            <h1>No spam or gimmicks</h1>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          </div>
          <div className="confi-2left">
            <h1>The Zerodha universe
            </h1>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
          <div className="confi-2left">
            <h1>Do better with money
            </h1>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className="confi-right">
          <img className='confi-img' src="media/images/ecosystem.png" alt="" />
        </div>

      </div>
      <img  className='confi-img2' src="media/images/pressLogos.png" alt="" />

    </div>
  )
}

export default Confidence
