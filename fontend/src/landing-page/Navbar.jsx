import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      //  <div className='navcontainer'>
      <nav class="navbar  navbar-expand-lg bg-light ">
      <div class="container-fluid">
       <NavLink class="navbar-brand" to="/"><img style={{width:"25%"}}  src="media/images/logo.svg" alt="" /></NavLink>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item">
          <Link className="Nav-Link1 active"  to="signup">SignUp/Login</Link>
          </li>
          <li class="nav-item">
          <Link className="Nav-Link1 active" to="/about">About</Link>
          </li>
            <li class="nav-item">
          <Link className="Nav-Link1 active" to="/product">Product</Link>
           </li>
           <li class="nav-item">
          <Link className="Nav-Link1 active" to='/pricing'>Pricing</Link>
           </li>   <li class="nav-item">
          <Link className="Nav-Link1 active"to='/support' >Support</Link>
           </li>
          
           
         </ul>
   
    </div>
</nav>
  )
}

export default Navbar
