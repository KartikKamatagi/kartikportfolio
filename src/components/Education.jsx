import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const Education = () => {
    const educationList = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Karnataka University, Karnataka Science College, Dharwad",
            duration: "2022 – 2025",
            score: "CGPA: 7.7",
            icon: <FaUniversity className="text-white" size={24} />
        },
        {
            degree: "PUC (Commerce)",
            institution: "SRA PU College, Banahatti",
            duration: "2020 – 2022",
            score: "Percentage: 92.83%",
            icon: <FaGraduationCap className="text-white" size={24} />
        },
        {
            degree: "SSLC",
            institution: "Karnataka School Examination and Assessment Board",
            duration: "2019 – 2020",
            score: "Percentage: 82.4%",
            icon: <FaSchool className="text-white" size={24} />
        }
    ];

    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My <span className="text-primary">Education</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-12">
                    {educationList.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="mb-12 pl-8 md:pl-10 relative group"
                        >
                            {/* Icon inside the timeline dot */}
                            <div className="absolute -left-[24px] md:-left-[28px] top-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-dark-bg flex items-center justify-center shadow-lg z-10 transform group-hover:scale-110 transition-transform duration-300">
                                {edu.icon}
                            </div>

                            <div className="glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 border border-dark-border/50 hover:border-primary/50 relative overflow-hidden ml-6 md:ml-8">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{edu.degree}</h3>
                                <h4 className="text-xl text-dark-muted font-semibold mb-4">{edu.institution}</h4>
                                <div className="flex flex-wrap gap-4 text-dark-muted font-medium mb-2 items-center">
                                    <span className="flex items-center gap-2 bg-dark-bg/50 px-3 py-1 rounded-full border border-dark-border text-sm backdrop-blur-sm">
                                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {edu.duration}
                                    </span>
                                    <span className="flex items-center gap-2 bg-dark-bg/50 px-3 py-1 rounded-full border border-dark-border text-sm text-accent backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                                        <FaGraduationCap className="text-accent" />
                                        {edu.score}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
