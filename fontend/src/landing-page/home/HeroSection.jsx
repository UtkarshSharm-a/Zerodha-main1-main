import React from 'react'
import "./HeroSection.css"
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {

  const navigate = useNavigate();
  const handleSignupClick = () => {
  navigate('/signup');
};

  return (
    <div className='container'>
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="hero img" className='mb-5' />
        <h1 className='Hero-h1 mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button onClick={handleSignupClick}  className='Hero-btn' >Sing up for free</button>
      </div>
    </div>
  )
}

export default HeroSection
