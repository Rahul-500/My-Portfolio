import React from 'react';
import Rahul from '../assets/Rahul.jpg';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:space-x-8'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-rose-200'>
                        I'm a Software Engineer..!!
                    </h2>
                    <p className='text-gray-200 py-4 text-lg leading-relaxed lg:mt-2'>
                        As a passionate and driven soon-to-be Computer Science graduate, I am deeply committed to the constantly-evolving field of
                        Software Development. I am seeking a challenging role where I can collaborate with like-minded professionals to create
                        innovative solutions and drive success. Team player with an eye for detail
                    </p>
                    <div>
                        <Link
                            to='projects'
                            smooth
                            duration={600}
                            className='group text-white w-fit px-6 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 lg:mt-2'
                        >
                            My Projects!
                            <span className='group-hover:rotate-90 ml-2'>
                                <BsArrowRightCircleFill size={25} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={Rahul}
                        alt="my profile"
                        className='rounded-full border-4 border-cyan-500 shadow-xl shadow-cyan-500/50 mx-auto w-2/3 md:w-2/3 lg:w-5/6 animate-fadeIn animate-zoomInOut'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
