import Bar from "../components/Bar";
import SkillIcons from "../components/SkillIcons";
import { languages, tools, techSkills } from "../data";
import { fadeInUp, stagger } from "../animations";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div className="px-6 py-1 font-Poppins dark:text-white "
    variants={ stagger}
        initial="initial"
        animate = "animate"
    >
      {/* //! Education & Experience */}
      <motion.div className="grid gap-6 p-2 md:grid-cols-2"
      variants={fadeInUp}
      >
        <div >
          <h5 className="my-3 text-base font-bold font-Poppins ">Education</h5>
          <div className="px-2 text-sm ">
            <h5 className="my-2 font-bold">
              Bachelor of Technology | (2016-2020)
            </h5> 
            <h5 className="my-2 font-medium">
              Pragati Engineering College | ECE | CGPA - 7.64
            </h5>
           
           
          </div>
          <div className="px-2 my-5 text-sm">
            <h5 className="my-2 font-bold">
              Intermediate | (2014-2016)
            </h5>
            <h5 className="my-2 font-medium">
              Narayana Junior College | 92.7%
            </h5>
           
          </div>
          <div className="px-2 text-sm">
            <h5 className="my-2 font-bold">
              Matriculation | (2014)
            </h5>
            <h5 className="my-2 font-medium">
              Sri Chaitanya Techno School | 9.8 CGPA
            </h5>
            
           
          </div>
        </div>
        <div >
          <h5 className="my-3 text-base font-bold font-Poppins ">Experience</h5>
          <div className="">
            <h5 className="my-2 text-sm font-semibold">Analyst | Capgemini Engineering</h5>
            {/* <p className="text-base font-semibold">Capgemini Engineering</p> */}
            <p className="my-3 text-sm">I dont know why I am doing this job</p>
          </div>
        </div>
      </motion.div>

      {/*Languages & Tools */}
      {/* <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-lg font-bold">Language & Framework</h5>
          <div className="my-2 text-sm">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-lg font-bold">Tools & Softwares</h5>
          <div className="my-2 text-sm">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div> */}

      <motion.div className="p-2 rounded-lg dark:bg-gray-800"
      
      >
        <div>
          <h5 className="my-2 text-base font-bold font-Poppins">Skills</h5>
          <div className="flex flex-wrap justify-center w-auto px-6 my-3 text-sm ">
         
            {techSkills.map((techSkill, i) => (
              <motion.div className='has-tooltip' key={i}
              variants={fadeInUp}>
              <span className='items-center p-2 -mt-8 text-sm rounded-md shadow-lg cursor-pointer tooltip dark:text-gray-100 dark:bg-gray-800'>{techSkill.name}</span>
                <SkillIcons value={techSkill} />
              </motion.div> 
            ))}
          
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;