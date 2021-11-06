import Bar from "../components/Bar";
import SkillIcons from "../components/SkillIcons";
import { languages, tools, techSkills } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2 font-Poppins">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-base font-bold ">Education</h5>
          <div className="">
            <h5 className="my-2 text-sm font-medium">
              Electronics and Communication(ECE)
            </h5>
            <p className="text-sm font-medium">Pragati Engineering college (2016-2020)</p>
            {/* <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p> */}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-base font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-sm font-semibold">Analyst | Capgemini Engineering</h5>
            {/* <p className="text-base font-semibold">Capgemini Engineering</p> */}
            <p className="my-3 text-sm">I dont know why I am doing this job</p>
          </div>
        </div>
      </div>

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

      <div className="">
        <div>
          <h5 className="my-3 text-base font-bold">Skills</h5>
          <div className="flex flex-wrap justify-center w-auto px-4 py-2 my-3 text-sm ">
         
            {techSkills.map((techSkill, i) => (
              <div className='has-tooltip' key={i}>
              <span className='items-center p-2 -mt-8 rounded-md shadow-lg cursor-pointer tooltip dark:text-gray-100 dark:bg-gray-800'>{techSkill.name}</span>
                <SkillIcons value={techSkill} />
              </div> 
            ))}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;