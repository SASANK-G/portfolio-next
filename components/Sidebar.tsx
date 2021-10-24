import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineDownload} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiMail} from 'react-icons/hi'




const Sidebar = () => {
    return (
        <div className="font-Pop drop-shadow-special">
            <img src="https://avatars.githubusercontent.com/u/76252464?s=400&u=097223f00442eca3d96ca7224f112e6a8fefe3eb&v=4" 
            alt="user avatar" 
            className="w-32 h-32 rounded-full mx-auto"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-Rob ">Sasank G</h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
            
            {/* social icons */}
            <div className= "flex justify-around my-5 px-7 text-green-500 w-9/12 md:w-full mx-auto">
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <HiMail className="w-8 h-8 cursor-pointer" />
                </a>
               
            </div>

            <div className="py-4 my-5 bg-gray-200">
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation className="w-6 h-6" />
                    <span>
                        Andhra Pradesh, India
                    </span>
                </div>
                <p className="my-2">gsbnsrsasank@gmail.com</p>
                <p className="my-2">9666050877</p>
            </div>
            <button className="w-8/12 py-2 my-2 text-white rounded-full bg-green-400">
                Ui theme
            </button>
            <a className="px-1 py-3 my-2 bg-gray-200 flex items-center justify-center" href="" download="">
                <AiOutlineDownload className="w-6 h-6 " /> Download Resume</a>
        
        </div>
    )
}

export default Sidebar
