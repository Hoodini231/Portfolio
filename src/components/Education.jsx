import { motion } from 'framer-motion';
import { styles } from '../style';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const EducationCard = ({ education, index, isLast }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative"
    >
      {/* Desktop Layout - Single Row with Images Above */}
      <div className="hidden md:flex items-start gap-8 mb-8">
        <div className="flex flex-col items-center flex-1">
          {/* Image Above Card */}
          <img 
            src={education.icon} 
            alt={education.company_name} 
            className="w-20 h-20 rounded-full object-cover border-4 border-tertiary mb-4"
          />
          
          {/* Card */}
          <div className="bg-tertiary p-6 rounded-2xl shadow-card w-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white text-[18px] font-bold">{education.title}</h3>
                <p className="text-secondary text-[14px] font-semibold">{education.company_name}</p>
              </div>
              <span className="text-secondary text-[12px]">{education.date}</span>
            </div>
            
            <ul className="space-y-2">
              {education.points.map((point, pointIndex) => (
                <li key={`education-point-${pointIndex}`} className="text-white-100 text-[12px] tracking-wider flex items-start">
                  <span className="text-tertiary mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Horizontal Line Segment */}
        {!isLast && (
          <div className="w-16 h-1 bg-gradient-to-r from-tertiary to-transparent mt-10"></div>
        )}
      </div>

      {/* Mobile Layout - Image Beside Card with Horizontal Lines */}
      <div className="md:hidden mb-8">
        <div className="flex items-start gap-4">
          {/* Image */}
          <div className="flex-shrink-0">
            <img 
              src={education.icon} 
              alt={education.company_name} 
              className="w-16 h-16 rounded-full object-cover border-4 border-tertiary"
            />
          </div>
          
          {/* Card */}
          <div className="flex-1 bg-tertiary p-4 rounded-2xl shadow-card">
            <div className="mb-3">
              <h3 className="text-white text-[18px] font-bold">{education.title}</h3>
              <p className="text-secondary text-[14px] font-semibold">{education.company_name}</p>
              <span className="text-secondary text-[12px]">{education.date}</span>
            </div>
            
            <ul className="space-y-1">
              {education.points.map((point, pointIndex) => (
                <li key={`education-point-${pointIndex}`} className="text-white-100 text-[12px] tracking-wider flex items-start">
                  <span className="text-tertiary mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Horizontal Line Segment for Mobile */}
        {!isLast && (
          <div className="mt-4 ml-20 h-1 bg-gradient-to-r from-tertiary to-transparent"></div>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Education</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      {/* Desktop Layout - Single Row with All Cards */}
      <div className="hidden lg:flex items-start gap-6 mt-20">
        {education.map((education, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="flex flex-col items-center flex-1 relative"
          >
            {/* Image Above Card */}
            <img 
              src={education.icon} 
              alt={education.company_name} 
              className="w-16 h-12 rounded-lg object-contain mb-3 bg-tertiary/20"
            />
            
            {/* Card */}
            <div className="bg-tertiary p-3 rounded-2xl shadow-card w-full relative">
              <div className="mb-2">
                <h3 className="text-white text-[14px] font-bold">{education.title}</h3>
                <p className="text-secondary text-[12px] font-semibold">{education.company_name}</p>
                <span className="text-secondary text-[10px]">{education.date}</span>
              </div>
              
              <ul className="mt-2 list-disc ml-5 space-y-1">
                {education.points.map((point, pointIndex) => (
                  <li key={`experience-point-${index}`} className="text-white-100 text-[10px] pl-1 tracking-wider">{point}</li>
                ))}
              </ul>
            </div>
            
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout - Vertical Cards */}
      <div className="lg:hidden mt-20">
        {education.map((education, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="mb-6 relative"
          >
            {/* Image Above Card */}
            <div className="flex justify-center mb-3">
              <img 
                src={education.icon} 
                alt={education.company_name} 
                className="w-16 h-14 rounded-lg object-contain bg-tertiary/20"
              />
            </div>
            
            {/* Card */}
            <div className="bg-tertiary p-4 rounded-2xl shadow-card relative">
              <div className="mb-3">
                <h3 className="text-white text-[16px] font-bold">{education.title}</h3>
                <p className="text-secondary text-[14px] font-semibold">{education.company_name}</p>
                <span className="text-secondary text-[12px]">{education.date}</span>
              </div>
              
              <ul className="mt-3 list-disc ml-5 space-y-1">
                {education.points.map((point, pointIndex) => (
                  <li key={`experience-point-${index}`} className="text-white-100 text-[12px] pl-1 tracking-wider">{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");