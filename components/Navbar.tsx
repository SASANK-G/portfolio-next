import React, { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem,  setActiveItem, name, route})=>{
    return(
        activeItem !== name ? (
            <Link href={route}>
                <a >
                    <span 
                    className='mx-2 cursor-pointer hover:text-green-500'
                    onClick={()=>setActiveItem(name)}>
                        {name}
                    </span>
                </a>
            </Link>
    ):null
        
    )
}



const Navbar = () => {

    const {pathname}=useRouter()
    const [activeItem, setActiveItem] = useState<string>('')

    
    useEffect(()=>{
        if(pathname === '/') setActiveItem('About')
        if(pathname === '/projects') setActiveItem('Projects')
        if(pathname === '/resume') setActiveItem('Resume')

    },[])

    return (
        <div className="flex justify-between px-2 py-2 my-2 text-lg font-Poppins dark:text-white">
            <span className='text-lg font-bold text-green-500 border-b-2 border-green-500'>
                {activeItem}
            </span>
            <div className="flex space-x-5 text-base">
                <NavItem 
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='About' route="/"
                    />
                    <NavItem 
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='Projects' route="projects"
                    />
                    <NavItem 
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='Resume' route="resume"
                    />
            </div>
        </div>
    )
}

export default Navbar
