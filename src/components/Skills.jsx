import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiDjango, SiJavascript, SiTailwindcss, SiMysql, SiSqlite, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", icon: <FaJava className="text-[#f89820]" />, level: "w-[90%]" },
                { name: "Python", icon: <FaPython className="text-[#3776ab]" />, level: "w-[85%]" },
                { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" />, level: "w-[80%]" }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "HTML & CSS", icon: <span className="flex gap-1"><FaHtml5 className="text-[#e34f26]" /><FaCss3Alt className="text-[#1572b6]" /></span>, level: "w-[95%]" },
                { name: "React.js", icon: <FaReact className="text-[#61dafb]" />, level: "w-[85%]" },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" />, level: "w-[85%]" },
                { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952b3]" />, level: "w-[90%]" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Spring Boot", icon: <SiSpringboot className="text-[#6db33f]" />, level: "w-[90%]" },
                { name: "Django", icon: <SiDjango className="text-[#092e20]" />, level: "w-[80%]" },
                { name: "REST APIs", icon: <span className="font-mono font-bold text-gray-400">{`{}`}</span>, level: "w-[90%]" }
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" />, level: "w-[85%]" },
                { name: "SQLite", icon: <SiSqlite className="text-[#003b57]" />, level: "w-[80%]" }
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-[#ff6c37]" /> },
                { name: "Eclipse", icon: <span className="text-purple-600 font-serif">e</span> },
                { name: "VS Code", icon: <VscVscode className="text-[#007acc]" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 relative bg-dark-bg/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-primary">Skills</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 border border-dark-border/50 hover:border-primary/50 group"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 border-b border-dark-border pb-3 flex items-center justify-between">
                                {category.title}
                                <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-accent transition-colors"></span>
                            </h3>

                            <div className="space-y-5">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="w-full">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <span className="text-dark-text font-medium">{skill.name}</span>
                                            </div>
                                        </div>
                                        {skill.level && (
                                            <div className="h-2 w-full bg-dark-bg rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: skill.level.replace('w-[', '').replace('%]', '%') }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.3 + (sIdx * 0.1), ease: "easeOut" }}
                                                    className={`h-full bg-gradient-to-r from-primary to-accent`}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
