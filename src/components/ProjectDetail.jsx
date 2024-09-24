import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data';


const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return <div className="text-red-500">Project not found!</div>;
    }

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-gray-800 rounded-lg overflow-hidden">
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover shadow-lg"
                />
                <div className="p-8">
                    <h1 className="text-4xl font-extrabold text-white">{project.title}</h1>
                    <p className="text-gray-300 mt-4 text-lg">{project.description}</p>
                    <p className="text-gray-400 mt-6">{project.details}</p>
                    <h2 className="text-2xl font-bold text-white mt-8">Technologies Used</h2>
                    <ul className="flex flex-wrap mt-2">
                        {project.techStack.map((tech, index) => (
                            <li key={index} className="bg-gray-700 text-white text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2">
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-l transition-all duration-300"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
