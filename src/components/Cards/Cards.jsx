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
                  <div className='transaction'>
                    <p>Payments</p>
                      <div className='transactionInfo'>
                        <p>Showing</p>
                        <a href="/"><p>20</p></a>
                        <p>pout of 500 payments</p>
                          <div className='searchBox'>
                            <input id="search" type="text" placeholder="Search..."/>
                          </div>
                            <p>Show</p>
                              
                              <div>
                                <label className="dropdown">

  <div className="dd-button">
    All
  </div>

  <input type="checkbox" className="dd-input" id="test"/>

  <ul className="dd-menu">
    <li>All</li>
    <br/>
    <li>Reconcilled</li>
    <li>Un-reconcilled</li>
    <li>Settled</li>
    <li>Unsettled</li>
   
  </ul>
  
</label>
                              </div>
                      </div>


              </div>
            </div>
      
    )
}

export default cards
