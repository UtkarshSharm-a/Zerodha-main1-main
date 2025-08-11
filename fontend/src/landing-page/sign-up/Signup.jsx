import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import axios from "axios"
import toast from 'react-hot-toast';


const Signup = () => {
  const [isLogin, setIsLogin]= useState(false)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginHandler=()=>{
    setIsLogin(!isLogin)
  }

  const formHandler= async (e)=>{
    e.preventDefault();

    if(isLogin){
      const user={email,password};
      try {
        const res=await axios.post("https://stock-buy-sell-backend.onrender.com",user,{withCredentials:true})
          if(res.data.success){
        toast.success(res.data.message)
          window.location.href = "http://localhost:3000";
      }
        
      } catch (error) {
        toast.error(error.response.data.message)
    console.error("✖ login error:", error.response?.data || error.message);
        
      }

    }else{
      const user={username,email,password}

        try {
      const res= await axios.post("https://stock-buy-sell-backend.onrender.com",user,{ withCredentials: true })
      console.log(res)
      if(res.data.success){
        toast.success(res.data.message)
        setIsLogin(true)
      }

      
    } catch (error) {
      toast.error(error.response.data.message)
    console.error("✖ register error:", error.response?.data || error.message);
      
    }


    }

  

    setUsername("")
    setEmail("")
    setPassword("")
  }
  
  return (
    <div className='SignupContainer'>
      <div className="SignUp-row">
        <div className="Signup-text">
          <h1>Sign up for an account</h1>
          <p>Create your Zerodha account to start investing</p>
        </div>

        <div className="Signup-inner-main">
          <div className="Signup-inner-left">
            <img src="https://signup.zerodha.com/assets/landing-DQ76ex-B.svg" alt="Illustration" />
          </div>

          <form onSubmit={formHandler} className="Signup-inner-right">
            <h2>{isLogin? "Login":"Signup"}</h2>
            <div className="container">
              {
                !isLogin &&     <input
                type="text"
                placeholder="Enter username "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              }
                 <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <p>{isLogin ? "New to Netflix?" : "Already have an account?"} <span onClick={loginHandler}  className='curser'>{isLogin ? "Signup" : "Login"}</span></p>
              <button className="otp-button">
                {isLogin?"Login":"Signup"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
