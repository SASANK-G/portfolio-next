import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2 font-Poppins">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-lg font-bold">
              Electronics and Communication(ECE)
            </h5>
            <p className="font-semibold">Pragati Engineering college (2016-2020)</p>
            {/* <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p> */}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-lg font-bold">Analyst</h5>
            <p className="font-semibold">Capgemini Engineering</p>
            <p className="my-3">I dont know why I am doing this job</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
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