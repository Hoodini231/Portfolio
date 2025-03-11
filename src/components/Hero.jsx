import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 w-full h-full z-0">
        <ComputersCanvas />
      </div>
      <div className="absolute top-56 left-16 z-10 flex flex-row items-start gap-5 pl-10">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className ="w-5 h-5 rounded-full bg-[#29a638]" />
          <div className="w-1 sm:h-80 h-40 green-gradient rounded-full" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white` }>Hi, I'm 
             <span className="text-[#32e847]"> Shaun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack Developer who loves to design 
            <br className="sm:block hidden" /> 
            backend processes with a diverse set of skills
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Keeps Original Position */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 bg-primary rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
