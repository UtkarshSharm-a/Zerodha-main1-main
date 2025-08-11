import React from 'react'
import "./Equity.css"

const Equity = () => {
  return (
    <div className='EquityContainer'>
      <div className="Equity-row">
        <div className="Equity-free-delevery">
          <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="Equity-free-delevery">
          <img src="https://zerodha.com/static/images/other-trades.svg" alt="" />
          <h3>Intraday and F&O</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>     <div className="Equity-free-delevery">
          <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
          <h3>Free direct MF</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
      </div>
      <div className="Equity-row1">
        <h1>Calculate your costs upfront using our brokerage calculator</h1>
        <div className="Equity-row1-inner">
        <div className="Equity-row-left">
          <h2>Securities/Commodities transaction tax</h2>
          <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
       <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
       <h2>Transaction/Turnover Charges</h2>
       <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
       <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
      <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
     <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
       <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p> 
    <h2>Call & trade</h2>
    <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>    
       <h2>Stamp charges</h2> 
       <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
        <p>Account with debit balance
</p>
<p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
        <p>rates specified by SEBI and the exchanges. All statutory and regulatorybr
          <br /> charges will be levied at actuals. Brokerage is also charged on expired,<b></b> exercised, and assigned options contracts. Free investments are available only for ourbr
           retail individual clients. Companies, Partnerships, Trusts, and HUFsbr <br /> need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for <br /> contracts where physical delivery happens. For netted off positions in physicallybr
            settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
        <div className="Equity-row-right">
          <h2>GST</h2>
          <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
       <h2>SEBI Charges</h2>
       <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
       <h2>DP (Depository participant) charges

</h2>
     <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
     <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
      <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee</p>
      <h2>Pledging charges</h2>
      <p>₹30 + GST per pledge request per ISIN.</p>
      <h2>AMC (Account maintenance charges)
</h2>
<p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
    <p>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here

</p>
<h2>Corporate action order charges

</h2>
<p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
   <h2>Off-market transfer charges</h2>
   <p>₹25 per transaction.</p>
   <h2>Physical CMR request</h2>
   <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
   <h2>Payment gateway charges</h2>
   <p>₹9 + GST (Not levied on transfers done via UPI)</p>
   <h2>Delayed Payment Charges</h2>
   <p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>
       <h2>Trading using 3-in-1 account with block functionality

</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Equity
