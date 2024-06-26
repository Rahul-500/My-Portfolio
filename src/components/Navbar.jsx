import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'experience',
        },
        {
            id: 3,
            link: 'projects',
        },
        {
            id: 4,
            link: 'skills',
        },
        {
            id: 5,
            link: 'contact',
        },
        
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed z-50'>
        <div>
        <h1 className='text-3xl font-signature ml-7 md:text-5xl'>Rahul Patil</h1>
        </div>

        <ul className='hidden md:flex mr-20'>
            {links.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200">
                    <Link to={link} smooth duration={600}>{link}</Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-200 hover:scale-105 duration-200 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={25}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-gray-200'>

                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={600}>{link}</Link>
                    </li>
                ))}
            </ul>
        )} 
    </div>
    
  )
}

export default Navbar
