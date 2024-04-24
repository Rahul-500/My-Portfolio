import React from 'react'
import ott from '../assets/Ott.png'
import Crud_app from '../assets/Crud_app.png'
import assistant from '../assets/assistant.png'
import aiplayground from '../assets/aiplayground.png'
import cineflicks from '../assets/cineflicks.png'
import experio from '../assets/experio.png'

const Projects = () => {

    const projects = [
        {
            id: 1,
            src: cineflicks,
            para: `Many youngsters when bored start browsing for good series or movies and end up surfing with messy
            recommendations.
            So, I have built an app which gives the basic info of the trending movies or series, its cast and even an option to
            watch its trailer.`,
            link: "https://rahuls-cineflicks.netlify.app/"
        },
        {
            id: 2,
            src: experio,
            para: `This is a team project of 4 members, this app is a User Generated Website where user himself will build this app by
            sharing his/her experience in any category through blogs.
            This app is basically a full-fledge website with both frontend and backend technology (MERN STACK) .`,
            link: "https://experiio.netlify.app/"
        },
        {
            id: 3,
            src: aiplayground,
            para: `This is a team project of 3 members, this app provides variety of AI options through which users can get a better
            understanding of how AI can do amazing things. Like Chatgpt, Image generator , Image colorization and Programming memes generator.`,
            link: "https://ai-playground-rsp.netlify.app/"
        },
        {
            id: 4,
            src: Crud_app,
            para: `This CRUD web application works like a Minimal Social Media App. This App helps the user to Create , Read, Update and Delete their Posts just like other Social Media app. I have also included the Search field which allows the user to Read and like the Posts of his/her Specific Interest..!!`,
            link: "https://crud-app-byrahul.netlify.app/"
        },
        {
            id: 5,
            src: assistant,
            para: `So, this Model works like a 'Google Assistant' in Android or 'Siri' in Iphone does. I have built this Model with the help of AI and Deep Learning Techniques and the Python Libraries Associated with it. The Complete Description of this model in the form of video is already there in my Youtube Channel.`,
            link: "https://youtu.be/JZdBRuTAVkg" 
        },
        {
            id: 6,
            src: ott,
            para: `So, these days as we surfer more on OTT Platforms and try to find some good Movies/Series, we end up in a Confusion, What to Watch.?
            Therefore, I have Built this Application which Provides/Tells the User, the List of Popular Movies or Series Trending right on that day on the Respective Platform Selected by the User.`,
            link: "https://youtu.be/orpezAQs8kk" 
        },
        
    ];


  return (
    <div name='projects' className='bg-gradient-to-b from-gray-800 to-black w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-blue-300'>My Projects</p>
            <p className='py-10'>Check out some of my work right here</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            projects.map(({id, src, para,  link}) => (
                <div key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt=""  className='rounded-md duration-300 hover:scale-105'/>
                    <p className='px-5 py-4 text-sm'>{para}</p>
                    <div className='flex items-center justify-center'>
                        <a href={link} target='_blank' rel='noreferrer' className='text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-1 m-4 duration-200 hover:scale-105'>Demo</a>
                    </div>
                </div>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Projects
