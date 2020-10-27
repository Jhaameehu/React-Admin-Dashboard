import React from 'react'
import './Cards.css'

const cards = () => {
    return (
      <div className='overview'>
        <div className="main-overview">
          <div className="overviewcard">
              <div className="overviewcard__icon">
                <p>Daily Transaction Volume <br/>2,342</p>  </div>
    
      </div>
        <div className="overviewcard">
    <div className="overviewcard__icon"><p>Daily Transaction Value <br/>N4,000,000</p>  </div>
    
  </div>
  <div className="overviewcard">
    <div className="overviewcard__icon"><p>Daily Transaction Volume <br/>452,000</p>  </div>
    
  </div>
  <div className="overviewcard">
    <div className="overviewcard__icon"><p>Daily Transaction Value <br/>N4,000,000</p>  </div>
    </div>
  </div>

  <div class="main-cards">
  <div class="card">Content</div>
  <div class="card">Content</div>
  <div class="card">Content</div>
</div>
</div>
      
    )
}

export default cards
