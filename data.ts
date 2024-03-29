import { IProject, Skill, SkillIcon } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { SiJavascript, SiHtml5, SiCss3, SiReact, 
          SiPython, SiBootstrap, SiMaterialui, 
          SiTailwindcss, SiGithub, SiJenkins, 
          SiJira, SiMongodb, SiFirebase } from "react-icons/si";




export const languages: Skill[] = [
    {
      Icon: BsCircleFill,
      name: "JavaScript",
      level: "75",
    },
    {
      Icon: BsCircleFill,
      name: "ReactJs",
      level: "70",
    },
    {
      Icon: BsCircleFill,
      name: "MaterialUI, TailwindCSS",
      level: "80",
    },
    {
      Icon: BsCircleFill,
      name: "HTML & CSS",
      level: "90",
    },
    {
      Icon: BsCircleFill,
      name: "Python",
      level: "80",
    },
    {
      Icon: BsCircleFill,
      name: "RobotFramework",
      level: "80",
    },
  ];
  
  export const tools: Skill[] = [
    {
      Icon: BsCircleFill,
      name: "Git",
      level: "85",
    },
    {
      Icon: BsCircleFill,
      name: "Jenkins",
      level: "45",
    },
    {
      Icon: BsCircleFill,
      name: "Jira",
      level: "60",
    },
    {
      Icon: BsCircleFill,
      name: "Photoshop",
      level: "45",
    },
  ];

  export const techSkills: SkillIcon[] = [
    {
      Icon: SiHtml5,
      name : "HTML",
      color : "#f2431e",
    },
    {
      Icon: SiCss3,
      name : "CSS",
      color : " #1e48f2 ",
    },
    {
      Icon: SiJavascript,
      name : "JavaScript",
      color : " #ffbb04  ",
    },
    {
      Icon: SiBootstrap,
      name : "BootStrap",
      color : " #6510fa ",
    },
    {
      Icon: SiMaterialui,
      name : "MaterialUI",
      color : " #09a6fa ",
    },
    {
      Icon: SiTailwindcss,
      name : "TailwindCSS",
      color : " #09fad9 ",
    },
    {
      Icon: SiReact,
      name : "ReactJs",
      color : " #2be2ff ",
    },
    
    {
      Icon: SiPython,
      name : "Python",
      color : "rgb(0,49,241)",
    },
    
    {
      Icon: SiMongodb,
      name : "MongoDB",
      color : " #167715 ",
    },
    {
      Icon: SiFirebase,
      name : "Firebase",
      color : " #ffbe04 ",
    },
    {
      Icon: SiGithub,
      name : "Git",
      color : " #ff6704 ",
    },
    {
      Icon: SiJenkins,
      name : "Jenkins",
      color : " #0f8699 ",
    },
    
    {
      Icon: SiJira,
      name : "Jira",
      color : "#09a6fa",
    },
  ]

  export const projects: IProject[] = [
    { 
      name: "MERN Blog",
      description:
        "This is a blog website.",
      image_path: "/images/mern.jpg",
      deployed_url: "",
      github_url: "https://github.com/SASANK-G/Blog-MERN",
      key_techs: ["React", "MongoDb", "NodeJs", "Express"],
    },
    { 
      name: "Inshorts Clone",
      description:
        "This app shows the latest news in less than 60 word, related to business, sports, technology around the World.",
      image_path: "/images/Inshorts.JPG",
      deployed_url: "https://inshorts-clone.vercel.app/",
      github_url: "https://github.com/SASANK-G/InshortsClone-r",
      key_techs: ["React", "NewsAPI", "Material UI"],
    },
    { 
      name: "Google Drive Clone",
      description:
        "This is clone for Google drive.",
      image_path: "/images/Drive.PNG",
      deployed_url: "https://google-drive-clone-five.vercel.app/",
      github_url: "https://github.com/SASANK-G/google-drive-clone",
      key_techs: ["React", "Material UI", "Firebase"],
    },
    { 
      name: "Entertainment Hub",
      description:
        "This app sshows the Movies and Series Information like release date, IMDB ratting, cast and TRAILER!! also.",
      image_path: "/images/Capture.JPG",
      deployed_url: "https://entertainment-hub-gs.netlify.app/",
      github_url: "https://github.com/SASANK-G/Entertainment-hub",
      key_techs: ["React", "MovieDbAPI", "Material UI"],
    },
    { 
      name: "Chat App",
      description:
        "This is a full Realtime Chat Application with Social Auth",
      image_path: "/images/ChatApp.PNG",
      deployed_url: "https://grove-chat-reactjs-sasank-g.vercel.app/",
      github_url: "https://github.com/SASANK-G/Grove_Chat_Reactjs",
      key_techs: ["React", "ChatEngine", "Firebase"],
    },
    
  ]