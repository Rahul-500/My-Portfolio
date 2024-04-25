import React from 'react';
import assistant from '../assets/assistant.png';
import cineflicks from '../assets/cineflicks.png';
import experio from '../assets/experio.png';
import k3sCluster from '../assets/k3sCluster.png';
import library_discord_bot from '../assets/library_discord_bot.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: k3sCluster,
            para: [
                'Developed a monitoring solution using Docker, Kubernetes, Grafana, Prometheus on an on-premise k3s cluster.',
                'Implemented the cluster on Raspberry Pi for efficient resource management and performance tracking.',
                'Enabled enhanced visibility and control over system metrics and performance through real-time monitoring and visualization.'
            ],
            link: 'https://github.com/Rahul-500/k3s-deployment-configs'
        },
        {
            id: 2,
            src: library_discord_bot,
            para: [
                'Created a Discord bot for managing the company’s library and facilitating employee interactions.',
                'Developed a CI/CD pipeline with GitHub Actions for automated testing and deployment as a Docker container.',
                'Improved efficiency and workflow through streamlined application management.'
            ],
            link: 'https://github.com/Rahul-500/library-bot'
        },
        {
            id: 3,
            src: cineflicks,
            para: [
                'Built an app that provides basic info of trending movies or series, including cast and trailers.',
                'Helps users easily find quality content without browsing through messy recommendations.'
            ],
            link: 'https://rahuls-cineflicks.netlify.app/'
        },
        {
            id: 4,
            src: experio,
            para: [
                'Team project involving a User Generated Website where users share their experiences through blogs.',
                'Built with MERN stack technologies and offers a full-fledged website experience.'
            ],
            link: 'https://experiio.netlify.app/'
        },
        {
            id: 5,
            src: assistant,
            para: [
                'Built an AI-based model similar to Google Assistant or Siri.',
                'Utilized deep learning techniques and Python libraries.',
                'Complete description available in a video on my YouTube channel.'
            ],
            link: 'https://youtu.be/JZdBRuTAVkg'
        },
    ];

    return (
        <div name='projects' className='bg-gradient-to-b from-black via-black to-gray-800 w-full text-white'>
            <div className='max-w-screen-xl p-6 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500 text-blue-300'>My Projects</h2>
                    <p className='py-6'>Check out some of my work right here:</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-12'>
                    {projects.map(({ id, src, para, link }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg p-4 lg:p-10'>
                            <img src={src} alt="" className='rounded-md duration-300 hover:scale-105 transition-transform' />
                            <div className='p-4'>
                                <ul className='list-disc list-inside'>
                                    {para.map((point, index) => (
                                        <li key={index} className='mb-2'>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex items-center justify-center'>
                                <a href={link} target='_blank' rel='noreferrer' className='text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-2 duration-200 hover:scale-105 transition-transform'>
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;