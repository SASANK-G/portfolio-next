import React, { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem, name, route, setActiveItem })=>{
    return(
        activeItem !== name ? (
            <Link href={route}>
            <a >
                <span onClick={()=>setActiveItem(name)}>
                    {name}
                </span>
            </a>
        </Link>
    ):null
        
    )
}



const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('')

    const {pathname}=useRouter()
    useEffect(()=>{
        if(pathname === '/') setActiveItem('About')
        if(pathname === '/Projects') setActiveItem('Projects')
        if(pathname === '/Resume') setActiveItem('Resume')

    },[])

    return (
        <div>
            <span className='font-bold text-green'>
                {activeItem}
            </span>
            <div className="flex space-x-3 text-green-400 font-lg">
                <NavItem 
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='About' route="/"
                    />
                    <NavItem 
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='Projects' route="Projects"
                    />
                    <NavItem 
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='Resume' route="Resume"
                    />
            </div>
        </div>
    )
}

export default Navbar
