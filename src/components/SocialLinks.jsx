import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (<>Instagram <FaInstagram size={25}/></>),
            href: 'https://www.instagram.com/rahul_patil_33_/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (<>Git Hub <FaGithub size={25}/></>),
            href: 'https://github.com/Rahul-500',
        },
        {
            id: 3,
            child: (<>LinkedIn <FaLinkedin size={25}/></>),
            href: 'https://www.linkedin.com/in/rahul-patil-95b010224/',
        },
        {
            id: 4,
            child: (<>Mail <HiOutlineMail size={25}/></>),
            href: 'mailto:rahulspatil500@gmail.com',
        },
        {
            id: 5,
            child: (<>Resume <BsFillPersonLinesFill size={25}/></>),
            href: '/Rahul-Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];

  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed '>
      <ul>
        {links.map(({id, child, href, style, download}) => (
            <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
            <a href={href} rel="noreferrer" className='flex justify-between items-center w-full text-white' download={download} target='_blank'>
                {child}
            </a></li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
