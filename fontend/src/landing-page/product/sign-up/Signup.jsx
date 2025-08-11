import React, { useState } from 'react';
import "./Signup.css";

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Send OTP handler
  const sendOtp = async () => {
    if (phone.length !== 10) {
      setMessage("Please enter a valid 10-digit phone number");
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch("https://zerodha-main1.onrender.com/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: phone }),
      });
      const data = await res.json();
      if (data.message) {
        setOtpSent(true);
        setMessage(data.message);
      } else {
        setMessage(data.error || "Failed to send OTP");
      }
    } catch (error) {
      setMessage("Error sending OTP");
    }
    setLoading(false);
  };

  // Verify OTP handler
 const verifyOtp = async () => {
  if (otp.length === 0) {
    setMessage("Please enter the OTP");
    return;
  }
  setLoading(true);
  setMessage('');
  try {
    const res = await fetch("https://zerodha-main1.onrender.com/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber: phone, otp }),
    });
    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
      
      // ✅ Redirect to dashboard after successful OTP verification
      setTimeout(() => {
        window.location.href = "https://zerodha-main1-1-dashboard1.onrender.com";  // change this URL if your dashboard is hosted elsewhere
      }, 1000); // short delay to show the success message
    } else {
      setMessage(data.error || "OTP verification failed");
    }
  } catch (error) {
    setMessage("Error verifying OTP");
  }
  setLoading(false);
};


  return (
    <div className='SignupContainer'>
      <div className="SignUp-row">
        <div className="Signup-text">
          <h1>Open a free demat & trading account online</h1>
          <p>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
        </div>
        <div className="Signup-inner-main">
          <div className="Signup-inner-left">
            <img src="https://signup.zerodha.com/assets/landing-DQ76ex-B.svg" alt="" />
          </div>
          <div className="Signup-inner-right">
            <h2>Signup now</h2>
            <p>Or track your existing application</p>
            <div className="container">
              <div className="phone-input">
                <div className="flag-container">
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" />
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  inputMode="numeric"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/, ''))} // only digits
                  disabled={otpSent} // disable after sending OTP
                />
              </div>

              {!otpSent ? (
                <button className="otp-button" onClick={sendOtp} disabled={loading}>
                  {loading ? "Sending OTP..." : "Get OTP"}
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/, ''))} // only digits
                  />
                  <button className="otp-button" onClick={verifyOtp} disabled={loading}>
                    {loading ? "Verifying OTP..." : "Verify OTP"}
                  </button>
                </>
              )}
            </div>

            <p>By proceeding, you agree to the Zerodha <span>terms & privacy policy</span></p>
            {message && <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
