import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";

const Tech = () => {
  // Separate technologies into categories
  const frontendTech = technologies.filter((tech) => tech.type === "frontend");
  const backendTech = technologies.filter((tech) => tech.type === "backend");
  const languages = technologies.filter((tech) => tech.type === "language");

  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* 3D Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-10 sm:gap-0 md:gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28 md:w-28 md:h-28 sm:w-16 sm:h-16">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Wider Text Card with Three Columns */}
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg max-w-4xl w-full">
        <h3 className="text-lg font-semibold mb-4 text-center">Technical Skills</h3>
        
        <div className="grid grid-cols-3 gap-6 text-center">
          {/* Front-end Column */}
          <div>
            <h4 className="text-md font-semibold underline mb-2">Front-end</h4>
            <ul className="list-none space-y-1">
              {frontendTech.map((tech) => (
                <li key={tech.name} className="text-sm">{tech.name}</li>
              ))}
            </ul>
          </div>

          {/* Back-end Column */}
          <div>
            <h4 className="text-md font-semibold underline mb-2">Back-end</h4>
            <ul className="list-none space-y-1">
              {backendTech.map((tech) => (
                <li key={tech.name} className="text-sm">{tech.name}</li>
              ))}
            </ul>
          </div>

          {/* Languages Column */}
          <div>
            <h4 className="text-md font-semibold underline mb-2">Languages</h4>
            <ul className="list-none space-y-1">
              {languages.map((tech) => (
                <li key={tech.name} className="text-sm">{tech.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");