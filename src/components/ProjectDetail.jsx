import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return <div className="text-red-500 text-center mt-10">Project not found!</div>;
    }

    return (
        <div className="bg-gray-900 min-h-screen py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    />

                    <div className="p-6 sm:p-8">
                        <h1 className="text-4xl font-extrabold text-white mb-4">{project.title}</h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>

                        <div className="bg-gray-700 p-4 rounded-lg mb-6">
                            <h2 className="text-2xl font-bold text-white">Project Details</h2>
                            <p className="text-gray-300 mt-2 text-lg">{project.details}</p>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">Technologies Used</h2>
                        <ul className="flex flex-wrap">
                            {project.techStack.map((tech, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-600 text-white text-sm font-medium px-4 py-2 rounded-full mr-2 mb-2"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>

                        {project.features && project.features.length > 0 && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="text-lg">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-l transition-all duration-300"
                        >
                            View Project
                        </a>
                    </div>
                </div>

                <div className="mt-10 bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Additional Information</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {project.additionalInfo || "No additional information available for this project."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
