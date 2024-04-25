import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
      .then(
        () => {
          e.target.reset();
          toast.success('Message sent successfully!');
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.error('FAILED...', error.text);
        },
      );
  };

  const links = [
    {
      id: 1,
      child: (<>Instagram <FaInstagram size={25} /></>),
      href: 'https://www.instagram.com/rahul_patil_33_/',
    },
    {
      id: 2,
      child: (<>Git Hub <FaGithub size={25} /></>),
      href: 'https://github.com/Rahul-500',
    },
    {
      id: 3,
      child: (<>LinkedIn <FaLinkedin size={25} /></>),
      href: 'https://www.linkedin.com/in/rahul-patil-95b010224/',
    },
    {
      id: 4,
      child: (<>Resume <BsFillPersonLinesFill size={25} /></>),
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
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='user_name' placeholder='Enter your name' required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="email" name='user_email' placeholder='Enter your E-mail' required className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name='message' placeholder='Enter your Message' rows="10" required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <button type="submit" value="Send" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Connect</button>
          </form>
        </div>
        <ToastContainer />
        <div className='flex flex-row list-none md:hidden'>
          {links.map(({ id, child, href, download }) => (
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
