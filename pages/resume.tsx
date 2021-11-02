import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2 font-Poppins">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-lg font-bold ">Education</h5>
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
          <h5 className="my-3 text-lg font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-sm font-semibold">Analyst | Capgemini Engineering</h5>
            {/* <p className="text-base font-semibold">Capgemini Engineering</p> */}
            <p className="my-3 text-sm">I dont know why I am doing this job</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
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
      </div>
    </div>
  );
};

export default Resume;