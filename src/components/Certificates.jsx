import { CertCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { certificates } from "../constants"

import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../style';

const Certificates = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Qualified</p>
        <h2 className={styles.sectionHeadText}>Certifcations.</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {certificates.map((cert) => (
        <div key={cert.name} className="w-[380px] h-[380px]">
          <CertCanvas icon={cert.icon} />
          <h3 className="text-white-100 font-semibold flex flex-row flex-wrap justify-center gap-10">{cert.name}</h3>
          <p className="text-secondary flex flex-row flex-wrap justify-center gap-10">{cert.giver}</p>
        </div>
      ))}
    </div>
    </>
  )
}


export default SectionWrapper(Certificates, "certificates")