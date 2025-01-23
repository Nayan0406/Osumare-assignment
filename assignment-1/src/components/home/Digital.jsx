import React from 'react'

const Digital = () => {
  return (
    <div className='digital'>
      <div className='heading'>
        <h2>Connect with Our Digital Marketing Experts</h2>
        <p><h6>Reach Out for Tailored Strategies and Results-Driven Solutions.<br/>Let's Elevate Your Online Presence Together</h6></p>
      </div>
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="Enter your number" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="submit-button">Get started</button>
      </form>
    </div>
    </div>
  )
}

export default Digital
