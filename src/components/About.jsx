import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[150px] xs:w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary py-3 px-6 xs:py-5 xs:px-12 rounded-[20px] min-h-[200px] xs:min-h-[280px] flex flex-col justify-center items-center">
          <img src={icon} alt={title} className="w-24 h-24 xs:w-32 xs:h-32 object-contain" />
          <h3 className="text-white text-[16px] xs:text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[14px] xs:text-[20px] md:text-[20px]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[28px] xs:text-[36px] md:text-[36px]`}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[12px] xs:text-[17px] max-w-3xl leading-[24px] xs:leading-[30px]"
      >
        <p>I am a full stack developer with a passion for creating beautiful, responsive, and user-friendly websites. I have a strong foundation in web development technologies such as HTML, CSS, JavaScript, React, and Node.js. I am looking for opportunities to work on exciting projects and collaborate with other talented developers.</p>
        
        <p>Outside of coding, I enjoy dancing, reading books and playing sports like dodgeball!</p>
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");