import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  // Function to get background color from tag color class
  const getBackgroundColor = (colorClass) => {
    switch (colorClass) {
      case "blue-text-gradient":
        return "#2f80ed";
      case "green-text-gradient":
        return "#11998e";
      case "pink-text-gradient":
        return "#ec008c";
      case "orange-text-gradient":
        return "#f12711";
      default:
        return "#2f80ed"; // default blue
    }
  };

  const CardContent = (
    <div className="bg-tertiary p-5 rounded-2xl shadow-card w-full">
      <div className="relative w-[140px] h-[180px] xs:w-full xs:h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute inset-0 flex justify-end m-3">
          <div 
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[16px] xs:text-[24px]">{name}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag.name} 
              className="px-3 py-1 rounded-full text-white text-[12px] xs:text-[14px] font-medium"
              style={{ backgroundColor: getBackgroundColor(tag.color) }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <p className="mt-2 text-secondary text-[12px] xs:text-[16px]">{description}</p>
      </div>
    </div>
  );

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="w-full"
      >
        {CardContent}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Projects</p>
      <h2 className={styles.sectionHeadText}>Recent Works.</h2>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Check out my projects below. Click on the GitHub icon to view the source code.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");