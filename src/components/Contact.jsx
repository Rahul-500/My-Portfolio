import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {

  const links = [
    {
        id: 1,
        child: (<>Instagram <FaInstagram size={25}/></>),
        href: 'https://www.instagram.com/rahul_patil_33_/',
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
        child: (<>Resume <BsFillPersonLinesFill size={25}/></>),
        href: '/Rahul_Resume.pdf',
        download: true,
    },
  ];


  return (
    <div name='contact' className='w-full bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white md:h-screen'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-lime-300'>Contact</p>
            <p className='py-10'>Submit the Form Below to get in Touch with me..!!!</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/3e8fb7f8-e301-44c9-8326-07e5a687800f" method="POST" className='flex flex-col w-full md:w-1/2'>
                <input type="text"  name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="email"  name='email' placeholder='Enter your E-mail' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name='message' placeholder='Enter your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Connect</button>
            </form>
        </div>
        <div className='flex flex-row list-none md:hidden'>
        {links.map(({id, child, href, download}) => (
              <li key={id} className='flex justify-between px-3 mt-8'>
              <a href={href} rel="noreferrer" download={download} target='_blank'>
                  {child}
              </a></li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
