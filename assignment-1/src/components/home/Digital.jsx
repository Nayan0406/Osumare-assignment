import React from 'react'

const Digital = () => {
  return (
    <div className='digital'>
      <div className='header'>
        <h1>Connect with Our Digital Marketing Experts</h1>
        <p>Reach Out for Tailored Strategies and Results-Driven Solutions.</p>
        <p>Let's Elevate Your Online Presence Together</p>
        <div className='container'><br/>
            <div className='row'>
                <div className='col col-md-3'>
                    <label htmlFor='text' className='firstname' aria-placeholder='First Name'></label>
                </div>

                <div className='col col-md-3'>
                    <label typeof='text' className='lastname' aria-placeholder='Last Name'></label>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Digital
