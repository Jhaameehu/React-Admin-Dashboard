import React from 'react'
import './Cards.css'
// import Chart from '../Chart/Chart';

const cards = () => {
    return (
      <div className='overview'>
        <div className="main-overview">
          <div className="overviewcard">
              <div className="overviewcard__icon">
                <p>Daily Transaction Volume</p>
                <span>2,342</span>
                {/* <Chart /> */}
                </div>
    
      </div>
        <div className="overviewcard">
          <div className="overviewcard__icon"><p>Daily Transaction Value</p>
          <span>N4,000,000</span>
        </div>
    
  </div>
  <div className="overviewcard">
    <div className="overviewcard__icon"><p>Daily Transaction Volume</p>
    <span>452,000</span>  
    </div>
    
  </div>
  <div className="overviewcard">
    <div className="overviewcard__icon"><p>Daily Transaction Value</p>
    <span>N4,000,000</span>
    </div>
    </div>
  </div>

  <div class="main-cards">
  <div class="card">Content</div>
  <div class="card">
    <span>Orders</span>
    <div className='line'></div>
    <p>Pending Orders <span style={{color: '#FDC203'}}>20</span></p>
    <p>Recent Orders <span style={{color: '#27AE60'}}>80</span></p>
    <p>Total Orders <span style={{color: '#1875F0'}}>100</span></p>

  </div>
  <div class="card">
    <span>Payments</span>
    <div className='paymentInfo'>.</div>
    <p>Un-reconcilled Payments <span style={{color: '#FDC203'}}>20</span></p>
    <p>Reconcilled Payments <span style={{color: '#27AE60'}}>80</span></p>
    <p>Total Payments <span style={{color: '#1875F0'}}>100</span></p>

  </div>
</div>
</div>
      
    )
}

export default cards