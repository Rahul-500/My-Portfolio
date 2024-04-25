import React from 'react'
import Rahul from '../assets/Rahul.jpg'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row lg:max-w-screen-xl'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-2xl md:text-5xl font-bold text-rose-200 lg:text-10xl lg:mb-5 mt-10 lg:mt-o'> <br /> I'm a  Software Engineer..!!</h2>
                    <p className='text-gray-200 py-2 lg:text-lg leading-relaxed'>As a passionate and driven soon-to-be Computer Science graduate, I am deeply committed to the constantly-evolving field of
                        Software Development. I am seeking a challenging role where I can collaborate with like-minded professionals to create
                        innovative solutions and drive success. Team player with an eye for detail.</p>

                    <div>
                        <Link to='projects' smooth duration={600} className='group text-white text-sm w-fit px-3 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer lg:mt-5 lg:px-6 lg:py-3 lg:text-lg'>
                            My Projects..!!
                            <span className='group-hover:rotate-90 duration-300'>
                                <BsArrowRightCircleFill size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={Rahul}
                        alt="my profile"
                        className='rounded-full border-4 border-cyan-500 shadow-xl shadow-cyan-500/50 mx-auto w-2/3 md:w-1/2 lg:w-5/6 animate-fadeIn animate-zoomInOut mb-9 lg:mb-0' />
                </div>
            </div>
        </div>
    )
}

export default Home

// import React from 'react';
// import Rahul from '../assets/Rahul.jpg';
// import { BsArrowRightCircleFill } from 'react-icons/bs';
// import { Link } from 'react-scroll';

// const Home = () => {
//     return (
//         <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
//             <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:space-x-8'>
//                 <div className='flex flex-col justify-center h-full w-full md:w-auto'>
//                     <h2 className='text-4xl md:text-5xl font-bold text-rose-200'>
//                         I'm a Software Engineer..!!
//                     </h2>
//                     <p className='text-gray-200 py-4 text-lg leading-relaxed'>
                        // As a passionate and driven soon-to-be Computer Science graduate, I am deeply committed to the constantly-evolving field of
                        // Software Development. I am seeking a challenging role where I can collaborate with like-minded professionals to create
                        // innovative solutions and drive success. Team player with an eye for detail.
//                     </p>
//                     <div>
//                         <Link
//                             to='projects'
//                             smooth
//                             duration={600}
//                             className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300'
//                         >
//                             My Projects!
//                             <span className='group-hover:rotate-90 ml-2'>
//                                 <BsArrowRightCircleFill size={25} />
//                             </span>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className='mt-4 md:mt-0'>
//                     <img
// src={Rahul}
// alt="my profile"
// className='rounded-full border-4 border-cyan-500 shadow-xl shadow-cyan-500/50 mx-auto w-2/3 md:w-1/2 lg:w-5/6 animate-fadeIn'
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
