import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineDownload} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {HiMail} from 'react-icons/hi'




const Sidebar = () => {
    return (
        <div  >
            <img src="https://avatars.githubusercontent.com/u/76252464?s=400&u=097223f00442eca3d96ca7224f112e6a8fefe3eb&v=4" 
            alt="user avatar" 
            className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="my-3 text-2xl font-medium tracking-wider font-Poppins">Sasank G</h3>
            <p className="px-2 py-1 my-2 bg-gray-200 rounded-full">Web Developer</p>
            
            {/* social icons */}
            <div className= "flex justify-around w-9/12 mx-auto my-3 text-green-500 px-7 md:w-full">
                <a href="https://github.com/SASANK-G" target="_blank" >
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="" onClick={()=> window.open('mailto:gsbnsrsasank@gmail.com')}>
                    <HiMail className="w-8 h-8 cursor-pointer" />
                </a>
               
            </div>

            <div className="py-4 my-3 bg-gray-200">
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation className="w-6 h-6" />
                    <span className="font-Poppins">
                        Andhra Pradesh, India
                    </span>
                </div>
                <p className="my-2">gsbnsrsasank@gmail.com</p>
                <p className="my-2">9666050877</p>
            </div>
            <button className="w-8/12 py-2 my-2 text-white bg-green-400 rounded-full">
                Ui theme
            </button>
            <a className="flex items-center justify-center px-1 py-3 my-2 bg-gray-200" href="" download="">
                <AiOutlineDownload className="w-6 h-6 " /> Download Resume</a>
        
        </div>
    )
}

export default Sidebar
