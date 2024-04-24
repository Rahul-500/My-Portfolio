import React from 'react'

const Skills = () => {

    const texts = [
        {
            id: 1,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/javascript.png?raw=true",
            title: 'JavaScript',
            style: "shadow-yellow-500"
        },
        {
            id: 2,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/react.png?raw=true",
            title: 'React',
            style: "shadow-blue-600"
        },
        {
            id: 3,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/tailwind.png?raw=true",
            title: 'Tailwind',
            style: "shadow-sky-400"
        },
        {
            id: 4,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/node.png?raw=true",
            title: 'NodeJS',
            style: "shadow-green-500"
        },
        {
            id: 5,
            src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
            title: 'Git',
            style: "shadow-orange-500"
        },
        {
            id: 6,
            src: "https://www.docker.com/wp-content/uploads/2023/08/logo-dont-stretch.svg",
            title: 'Docker',
            style: "shadow-blue-500"
        },
        {
            id: 7,
            src: "https://download.logo.wine/logo/Kubernetes/Kubernetes-Logo.wine.png",
            title: 'Kubernetes',
            style: "shadow-blue-500"
        },
        {
            id: 8,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWv9HP-G8JBBamW_HG-pnMh234GGww0ovHgIAzMZCkZA&s",
            title: 'Spring Boot',
            style: "shadow-green-500"
        },
        {
            id: 9,
            src: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
            title: '',
            style: "shadow-blue-500"
        },
        {
            id: 10,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclnX8t9HBA1P1pUP1-8uw9NGbJOy_IfLlVovdtBoB4IaenK4CaoTpy7uFDLY4IX0VOr8&usqp=CAU",
            title: 'MongoDB',
            style: "shadow-green-500"
        },
    ];

  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-emerald-300'>Skills</p>
            <p className='py-6'>These are the Technologies I've worked with..!!</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-8 text-center sm:px-0'>
            {texts.map(({id, src, title, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
