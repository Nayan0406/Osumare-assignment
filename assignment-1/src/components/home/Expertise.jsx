import React from 'react'

const Expertise = () => {
  return (
    <div className='expertise'>
      <div className='container'>
        <h1>Our Expertise in Action</h1>
        <div className='banner'>
            <div className='card'>
                <div className='image'>
                    <img src="icon (4).png" alt="card1" />
                </div>
                <div className='heading'>
                    <h4>Effective CTAs</h4>
                </div>
                <p>See how our strategic CTAs drove a significant increase in porperty inquiries and accelerated sales for a real estate agency.</p>
            </div>
            <div className='card'>
                <div className='image'>
                    <img src="icon (5).png" alt="card2" />
                </div>
                <div className='heading'>
                    <h4>Conversion-Optimized Landing Pages</h4>
                </div>
                <p>Explore a case study where our landing page optimization increased property lead converion rates by 30%</p>
            </div>
            <div className='card'>
                <div className='image'>
                    <img src="icon (6).png" alt="card3" />
                </div>
                <div className='heading'>
                    <h4>Trust Building with Social Proof</h4>
                </div>
                <p>Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
            </div>
            <div className='card'>
                <div className='image'>
                    <img src="icon (7).png" alt="card4" />
                </div>
                <div className='heading'>
                    <h4>Mobile-First Success:</h4>
                </div>
                <p>Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise
