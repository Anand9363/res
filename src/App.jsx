import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Read from './Read'
import BookingForm from './Form'
import TestimonialCarousel from './Customers' 
import Footer from './Footer'
// import FoodCarousel from './HeroSection'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Read/>
      <BookingForm/>
      <TestimonialCarousel/>
      <Footer/>
      
    </div>
  )
}

export default App
