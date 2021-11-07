import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects as projectsData } from "../data";



const Projects = () => {
    
    return (
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "70vh" }}>
        <div className="relative grid grid-cols-12 gap-4 my-3">
          {
                
          projectsData.map((project) => (
              
            <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-gray-800" key={project.name}>
              <ProjectCard project={project} key={project.name} />
            </div>
          ))}
        </div>
      </div>
    )
}

export default Projects
