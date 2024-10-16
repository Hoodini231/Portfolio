import { motion } from 'framer-motion';

import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" style={{backgroundColor: 'transparent'}}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className ="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient rounded-full" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white` }>Hi, I'm 
             <span className="text-[#915eff]"> Shaun</span>
          </h1>
          <p classname={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack Developer who loves to design 
            <br className="sm:block hidden" /> 
            backend processes with a diverse set of skills
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero