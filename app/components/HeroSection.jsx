"use client"
import React from 'react'
import Image from 'next/image'


import { TypeAnimation } from 'react-type-animation';




const HeroSection = ({ hasCv = false }) => {
  return (
    <section className="lg:py-16">  
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
             <h1 className="text-shadow-white mb-4 text-4xl sm:text-5xl  lg:text-6xl xl:text-7xl lg:leading-tight font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Howdy, </span>{" "}I&apos;m Andrew a</h1>
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
            <div className="flex flex-wrap gap-4">
                    <a href="#contact" className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">Hire Me</a>
                    {hasCv ? (
                      <a href="/cv.pdf" download className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                      </a>
                    ) : (
                      <button disabled className="px-6 py-3 w-full sm:w-fit rounded-full border border-[#33353F] text-[#ADB7BE] cursor-not-allowed">CV coming soon</button>
                    )}

            </div>
            </div>
            <div className="min-w-0 w-full lg:col-span-5 place-self-center">
            <div className="relative mx-auto aspect-square w-full max-w-[250px] lg:max-w-[400px] overflow-hidden rounded-full bg-[#181818]">
                <Image
                src ="/images/headshot.jpg"
                className="object-cover"
                alt="Portrait of Andrew Gao"
                fill
                sizes="(min-width: 1024px) 400px, 250px"/>
            </div>
            </div>
            </div>
             </section>

  )
}

export default HeroSection