import React from 'react'
import "./CreateTickit.css"

const CreateTickit = () => {
  return (
    <div className='createContainer'>
      <div className="create-row">
        <h1>To create a ticket, select a relevant topic </h1>
        <div className="create-inner">
          <div className="create-text">
            <h2> Account Opening</h2>
            <a href="">Resident individual</a>
            <a href="">Minor</a>
            <a href="">Non Resident Indian (NRI)</a>
            <a href="">Company, Partnership, HUF and LLP</a>
            <a href="">Glossary</a>
          </div>
          <div className="create-text">
            <h2>Your Zerodha Account</h2>
            <a href="">Your Profile</a>
            <a href="">Account modification</a>
            <a href="">Client Master Report (CMR) and Depository <br /> Participant (DP)
            </a>
            <a href="">Nomination</a>
            <a href="">Transfer and conversion of securities</a>
          </div>
          <div className="create-text">
            <h2>  Kite</h2>
            <a href="">IPO</a>
            <a href="">Trading FAQs
            </a>
            <a href="">Margin Trading Facility (MTF) and Margins</a>
            <a href="">Charts and orders</a>
            <a href="">Alerts and Nudges</a>
            <a href="">General</a>
          </div>
        </div>
   
        <div className="create-inner">
          <div className="create-text">
            <h2>  Funds</h2>
            <a href="">Add money</a>
            <a href="">Withdraw money</a>
            <a href="">Add bank accounts</a>
            <a href="">eMandates</a>
          </div>
          <div className="create-text">
            <h2> Console</h2>
            <a href="">Portfolio</a>
            <a href="">Corporate actions</a>
            <a href="">Funds statement  (DP)
            </a>
            <a href="">Reports
            </a>
            <a href="">Profile</a>
            <a href="">Segments</a>
          </div>
          <div className="create-text">
            <h2>  Coin
            </h2>
            <a href="">Understanding mutual funds and Coin</a>
            <a href="">Coin app
            </a>
            <a href="">Coin web</a>
            <a href="">Transactions and reports
            </a>
            <a href="">National Pension Scheme (NPS)</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CreateTickit
