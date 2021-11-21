import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineDownload} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiMail} from 'react-icons/hi'
import {useTheme} from 'next-themes'
import Image from "next/image";
import { motion } from 'framer-motion'
import { fadeInUp, stagger, zoom } from '../animations'




const Sidebar = () => {

    const {theme, setTheme} = useTheme()


    return (
        <div className="text-sm font-Poppins" 
        >

            <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="float-right " 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            > 
                {
                    <svg
                
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-800 dark:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    {theme === 'dark' ? (
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                ) : (
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                )}
                    </svg>
                }
        </button>
            
          
          <Image
                src="https://avatars.githubusercontent.com/u/76252464?s=400&u=097223f00442eca3d96ca7224f112e6a8fefe3eb&v=4"
                alt="avatar"
                className="mx-auto border rounded-full "
                height="128px"
                width="128px"
                layout="intrinsic"
                quality="100"
            />

         


            {/* <img src="https://avatars.githubusercontent.com/u/76252464?s=400&u=097223f00442eca3d96ca7224f112e6a8fefe3eb&v=4" 
            alt="user avatar" 
            className="w-32 h-32 mx-auto rounded-full"
            /> */}
            <h3 className="my-3 text-2xl font-medium tracking-wider font-Festive">Sasank G</h3>
            <p className="px-2 py-1 my-2 bg-gray-100 rounded-full dark:bg-gray-800">Web Developer</p>
            
            {/* social icons */}
            <motion.div className= "flex justify-around w-9/12 mx-auto my-6 text-green-500 px-7 md:w-full"
            variants={fadeInUp}
            initial="initial"
        animate = "animate" >
                <a href="https://github.com/SASANK-G" target="_blank" rel="noreferrer" >
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="" onClick={()=> window.open('mailto:gsbnsrsasank@gmail.com')}>
                    <HiMail className="w-8 h-8 cursor-pointer" />
                </a>
               
            </motion.div>

            <div className="py-4 my-6 bg-gray-100 rounded-lg dark:bg-gray-800 ">
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation className="w-6 h-6" />
                    <span>
                        Andhra Pradesh, India
                    </span>
                </div>
                <p className="my-2">gsbnsrsasank@gmail.com</p>
                <p className="my-2">9666050877</p>
            </div>
            {/* <button className="w-8/12 py-2 my-2 text-white bg-green-400 rounded-full">
                Ui theme
            </button> */}
            <a className="flex items-center justify-center px-1 py-3 my-2 bg-green-400 rounded-lg " href="" download="">
                <AiOutlineDownload className="w-6 h-6 " /> Download Resume</a>
        
        </div>
    )
}

export default Sidebar
