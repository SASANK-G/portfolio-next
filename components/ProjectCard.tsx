import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="dark:bg-gray-800 font-Poppins">
      <Image
        src={image_path}
        alt={name}
        className="rounded-lg cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-sm text-center ">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 bg-gray-100 rounded-lg dark:bg-gray-800 md:grid-cols-2 gap-x-12 dark:text-white ">
          <div>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
              className="rounded-lg"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-3 py-2 space-x-3 text-base bg-gray-200 rounded-xl dark:bg-gray-900"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-3 py-2 space-x-3 text-base bg-gray-200 rounded-xl dark:bg-gray-900"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-medium md:text-xl">{name}</h2>
            <h3 className="px-3 my-3 text-sm font-medium ">{description}</h3>

            <div className="flex flex-wrap px-3 mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-green-400 rounded-lg "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-gray-900"
          >
            <MdClose size={22} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;