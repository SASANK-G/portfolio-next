import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import {AiOutlineRight} from 'react-icons/ai'
import { motion } from 'framer-motion'
import { fadeInUp, stagger, zoom } from '../animations'



const index = () => {
  return (
    <motion.div className="px-5 py-2 dark:text-white" 
    variants={ stagger}
        initial="initial"
        animate = "animate"
    >
      
      <motion.div className="grid justify-center w-full h-full grid-rows-2 p-2 ">
      
        <motion.div className="flex justify-center px-2 my-3 text-base text-justify font-Poppins md:text-center md:my-6 "
        variants={fadeInUp}
        >
          <div className="self-start text-green-600"><ImQuotesLeft /></div>
            <div className="flex items-center justify-center px-2 ">I am a self-starter with strong interpersonal skills. I work efficiently both as an individual 
              contributor as well as along with a team. I seek new challenges and try to think out-of-the-box 
              while looking for creative solutions to a given problem. Besides the details given in my resume,
              I believe in character, values and vision. I am a quick learner and believe in learning from my mistakes, 
              for I strongly feel that this virtue will take me ahead in life and career. 
            </div>
          <div className="flex self-end text-green-600"> <ImQuotesRight /></div>
        
        </motion.div>
        
        <motion.div className="py-4 md:px-12 px-7 font-Poppins"
        variants={fadeInUp}
        >
          <div className="flex items-center self-start py-2 "><AiOutlineRight className="mx-2 text-green-600"/> Age : 22 </div>
          <div className="flex items-center self-start py-2 "><AiOutlineRight className="mx-2 text-green-600"/> Marital Status : Single</div>
          <div className="flex items-center self-start py-2 "><AiOutlineRight className="mx-2 text-green-600"/>Hobbies : Photoshop, Sudoku </div>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default index
