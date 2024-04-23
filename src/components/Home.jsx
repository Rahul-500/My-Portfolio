import React from 'react'
import Rahul from '../assets/Rahul.jpg'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl md:text-5xl font-bold text-rose-200'> <br/> I'm a  Software Engineer..!!</h2>
                <p className='text-gray-200 py-4'>Hello World..!! My name is Rahul Patil currently pursuing my Computer Science  degree from Gogte Institute of Technology. I am currently in my third year. I am also an active Coder on different Platforms like 
                <a className='text-amber-400' target='_blank' rel='noreferrer' href="https://leetcode.com/rahul_patil_33/"> ' Leetcode '</a> <a className='text-emerald-400' target='_blank' rel='noreferrer' href="https://auth.geeksforgeeks.org/user/rahulspatil500/practice"> ' GeeksForGeeks '</a> ..!!</p>

                <div>
                    <Link to='projects' smooth duration={600} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        My Projects..!!
                        <span className='group-hover:rotate-90 duration-300'>
                            <BsArrowRightCircleFill size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={Rahul} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-200'/>
            </div>
        </div>
    </div>
  )
}

export default Home
