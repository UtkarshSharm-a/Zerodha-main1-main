import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className=' SupportContainer'>
      <div className="support-row">
        <div className="support-text">
          <h2>Support Portal</h2>
          <h3>Track tickets </h3>
        </div>
        <div className="spport-text-main">
          <div className="support-text-left">
            <h2>Search for an answer or browse help topics to create a ticket</h2>
            <input type="text" placeholder='Eg:How do i activate F&O, why is my order getting rejected' name="" id="" />
           <div className="support-text-left-innner">
           <a href="">Track account opening</a>
            <a href=""> Track segment activation</a>
            <a href=""> Intraday marginians</a>
            <br />
            <a href="">Kite user manual</a>
           </div>
          </div>
          <div className="support-text-right">
            <h2>Featured</h2>
            <a href="">1.Exclusion of F&O contracts on 5 securities from May 27, 2025</a>
           <a href="">2.Rights Entitlements listing in March 2025</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
