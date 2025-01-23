import React from 'react'
import HomeSection from './HomeSection'
import MiddleSection from './MiddleSection'
import ServiceSection from './ServiceSection'
import Navigating from './Navigating'
import DrivingProperty from './DrivingProperty'
import Inquires from './Inquires'
import Expertise from './Expertise'
import Peace from './Peace'
import Partners from './Partners'
import Question from './Question'
import Digital from './Digital'
import Footer from './Footer'

const Home = () => {
  return (
    <section className='homePage'>
        <HomeSection />
        <MiddleSection />
        <ServiceSection />
        <Navigating />
        <DrivingProperty />
        <Inquires />
        <Expertise />
        <Peace />
        <Partners />
        <Question />
        <Digital />
        <Footer />
    </section>
  )
}

export default Home
