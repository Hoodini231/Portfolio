import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../style';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Technical</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
        
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")