import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';

const Experience = () => {
    const responsibilities = [
        "Developed web applications using Java, Spring Boot, React.js.",
        "Built projects like Online Movie Ticket Booking System, Food Delivery Web App.",
        "Worked with MySQL and SQLite databases.",
        "Used tools like Postman, GitHub, Eclipse, and VS Code.",
        "Learned REST API integration and frontend UI development."
    ];

    const techTags = ["HTML", "CSS", "JavaScript", "React.js", "Java", "Spring Boot", "MySQL", "SQLite", "REST APIs"];

    return (
        <section id="experience" className="py-20 relative bg-dark-bg/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional <span className="text-primary">Experience</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="glass-card rounded-2xl overflow-hidden group border border-dark-border/50 hover:border-primary/50 transition-colors shadow-2xl hover:shadow-primary/20"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary/20 to-accent/10 p-6 md:p-8 border-b border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 opacity-70"></div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shrink-0 mt-1 transform group-hover:scale-110 transition-transform duration-300">
                                        <FaBriefcase className="text-white text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Full Stack Developer Intern</h3>
                                        <h4 className="text-xl text-dark-muted font-medium mt-1">ExcelR EdTech</h4>
                                    </div>
                                </div>
                                <div className="md:text-right">
                                    <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                                        Internship
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 relative">
                            <h5 className="text-lg text-white font-semibold mb-5 flex items-center gap-2">
                                <FaCode className="text-primary" /> Key Responsibilities:
                            </h5>
                            <ul className="space-y-4 mb-8">
                                {responsibilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group/item">
                                        <span className="text-accent mt-1 shrink-0 transform group-hover/item:translate-x-1 transition-transform">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-slate-300 leading-relaxed font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-dark-border border-dashed">
                                <h5 className="text-sm text-dark-muted font-semibold mb-4 uppercase tracking-wider">Technologies & Tools</h5>
                                <div className="flex flex-wrap gap-2">
                                    {techTags.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 text-sm font-medium rounded-md bg-dark-bg text-primary border border-primary/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
