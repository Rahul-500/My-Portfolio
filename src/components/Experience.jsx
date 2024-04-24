import React from 'react';

const Experience = () => {
    const experiences = [
        {
            year: "Jan 2024 - Apr 2024",
            role: "Software Engineering Intern",
            company: "Infraspec",
            description: [
                "Created a Discord bot for the company’s library, which includes features for book management and employee interactions.",
                "Developed a CI/CD pipeline using GitHub Actions to automate testing and deployment of the application as a Docker container, enhancing the efficiency and workflow for the company.",
                "Developed a project involving DevOps concepts such as Docker, Kubernetes, Grafana, and Prometheus, creating an 'On-Prime k3s Cluster on Bare Metal Raspberry Pi with Grafana Prometheus Monitoring' solution.",
                "Developed proficiency in writing clean Java Spring Boot code, adhering to SOLID principles, and practicing test-driven development (TDD) by writing test cases alongside code."
            ],
            technologies: ["TDD", "Git", "Java", "Spring Boot", "Docker", "Kubernetes", "Javascript"]
        }
    ];

    return (
        <div name="experience" className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-fuchsia-400">Experience</p>
                </div>
                {experiences.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-md text-neutral-100 font-semibold">{experience.year}</p>
                        </div>
                        <div className="w-full lg:w-3/4 max-w-3xl"> 
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - <span className="text-sm text-fuchsia-400">{experience.company}</span>
                            </h6>
                            <ul className="mb-4 list-disc list-inside text-neutral-100">
                                {experience.description.map((desc, i) => (
                                    <li key={i} className="mb-2">{desc}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 mt-2 bg-gray-800 px-2 py-1 rounded text-fuchsia-400 border border-gray-500 font-semibold">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
