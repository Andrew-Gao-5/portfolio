"use client"
import React from 'react'
import Image from 'next/image'


import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (
    <section>  
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 place-self-center text-center sm:text-left">
             <h1 className="text-shadow-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Howdy, </span>{" "}I'm Andrew a</h1>
             <br></br>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Andrew Gao',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Mobile Developer',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={70}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
             <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hello this is an example
            </p>
            <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button>

            </div>
            </div>
            <div className="lg:col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250] h-[400] lg:w-[400] lg:h-[400] relative">
                <Image
                src ="/images/headshot.jpg"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="hero image"
                width={300}
                height={300}/>
            </div>
            </div>
            </div>
             </section>

  )
}

export default HeroSection