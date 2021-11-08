import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects as projectsData } from "../data";
import { fadeInUp, stagger } from "../animations";



const Projects = () => {
    
    return (
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "70vh" }}>
        <motion.div className="relative grid grid-cols-12 gap-4 my-3"
        variants={ stagger}
        initial="initial"
        animate = "animate"
        >
          {
                
          projectsData.map((project) => (
              
            <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-gray-800" 
            key={project.name}
            variants={fadeInUp}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
}

export default Projects
