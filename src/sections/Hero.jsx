import React from 'react'
import Button from '../components/Button'

import arrowRight from '../assets/icons/arrow-right.svg'
import { statistics } from '../constants'

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-blue-500">Vapes from around the world!</p>
        <h1>
          <span>Vape Worlds</span>
          <br/>
          <span>New Arrivals!</span>
        </h1>
        <p>Discover the lastest vapes from around the world</p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          )
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero