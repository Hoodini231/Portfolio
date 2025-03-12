import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full sm:w-[200px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary py-5 px-12 sm:py-3 sm:px-6 rounded-[20px] min-h-[280px] sm:min-h-[200px] flex flex-col justify-center items-center">
          <img src={icon} alt={title} className="w-32 h-32 sm:w-24 sm:h-24 object-contain" />
          <h3 className="text-white text-[20px] sm:text-[16px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[20px] sm:text-[16px] md:text-[20px]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[36px] sm:text-[28px] md:text-[36px]`}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] sm:text-[12px] md:text-[17px] max-w-3xl leading-[30px] sm:leading-[24px]"
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