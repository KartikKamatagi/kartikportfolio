import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projectsList = [
        {
            title: "Online Movie Ticket Booking System",
            description: "A web application that allows users to browse movies, select show timings, and book tickets online. Includes admin panel for managing movies and theatres.",
            image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop", // Movie theater placeholder
            tech: ["Spring Boot", "React", "MySQL"],
            github: "#",
            demo: "#"
        },
        {
            title: "Food Delivery Web App",
            description: "A responsive food delivery interface with cart, checkout, search, categories, and order tracking using React Context API.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop", // Food placeholder
            tech: ["React", "JavaScript", "CSS", "React Router"],
            github: "#",
            demo: "#"
        },
        {
            title: "Adventure Tourism Website",
            description: "A tourism web platform where users can explore adventure packages and view activity details.",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop", // Tourism placeholder
            tech: ["Python", "Django", "SQLite", "HTML", "CSS"],
            github: "#",
            demo: "#"
        },
        {
            title: "Weather Checking App",
            description: "Developed a weather application that fetches real-time weather data using a public Weather API. Users can search for any city to view current temperature, humidity, and weather conditions.",
            image: "https://i.pinimg.com/736x/47/3e/f8/473ef810fc400109b613becdcbec407c.jpg", // Weather placeholder
            tech: ["React.js", "JavaScript", "Weather API", "CSS"],
            github: "https://github.com/KartikKamatagi/weather_forecast_app",
            demo: "https://weather-forecast-app-iota-nine.vercel.app/"
        },
        {
            title: "Image Search Application",
            description: "Built an image search web application that allows users to search and display images from an external Image API. Implemented dynamic image loading using JavaScript API requests.",
            image: "https://i.pinimg.com/1200x/eb/32/35/eb3235823fa2894fe4a393c9f612aeba.jpg", // Gallery placeholder
            tech: ["JavaScript", "HTML", "CSS", "Image API"],
            github: "https://github.com/KartikKamatagi/image-search-web",
            demo: "https://image-search-web-vus8.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {projectsList.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl"
                        >
                            {/* Project Image Container */}
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />

                                {/* Hover Links Overlay */}
                                <div className="absolute inset-0 bg-dark-bg/80 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm">
                                    <a href={project.github} className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href={project.demo} className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors">
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-dark-muted mb-6 line-clamp-3 hover:line-clamp-none transition-all">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
