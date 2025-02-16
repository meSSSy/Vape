import React, { useState } from 'react';
import Button from '../components/Button';
import arrowRight from '../assets/icons/arrow-right.svg';
import { vapes, statistics } from '../constants';
import VapeCard from '../components/VapeCard';

const Hero = () => {
  // Initialize with the first vape's big image
  const [currentBigImage, setCurrentBigImage] = useState(vapes[0]?.vapeBig || '');

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-slate-gray">Vapes from around the world!</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 text-blue-600">Vape Worlds</span>
          <br/>
          <span>New Arrivals!</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-sm">Discover the latest vapes from around the world</p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative flex-1 flex flex-col justify-center items-center mt-10 xl:min-h-screen">
        {currentBigImage && (
          <img 
            src={currentBigImage} 
            alt="Vape Collection" 
            className="max-w-full h-auto object-contain mb-8"
          />
        )}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {vapes.map((vape, index) => (
            <div key={index} className="w-24">
              <VapeCard 
                imgURL={vape}
                changeVapeBigImage={setCurrentBigImage}
                vapeBigImage={currentBigImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;