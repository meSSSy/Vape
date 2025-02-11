import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Vapes from around the world!</p>
        <h1>
          <span>Vape Worlds</span>
          <br/>
          <span>New Arrivals!</span>
        </h1>
        <p>Discover the lastest vapes from around the world</p>
        <Button />
      </div>
    </section>
  )
}

export default Hero