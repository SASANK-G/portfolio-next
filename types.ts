import { IconType } from "react-icons";


export interface Skill {
    Icon: IconType;
    name: string;
    level: string;
  }

export interface SkillIcon {
    Icon : IconType;
    name : string;
    color : string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  key_techs: string[];
}