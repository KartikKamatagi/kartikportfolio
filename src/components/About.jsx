import React from 'react';
import { motion } from 'framer-motion';
import Kartik from '../assets/Kartik_k1.jpg'; // Placeholder image, user can replace with actual profile picture

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About <span className="text-primary">Me</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Profile Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 lg:col-span-5 relative flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-6 scale-105 opacity-50 blur-lg"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform shadow-2xl overflow-hidden glass-card p-1">
                                {/* Placeholder for Profile Image */}
                                <div className="w-full h-full bg-dark-bg rounded-xl flex items-center justify-center text-dark-muted border border-dark-border overflow-hidden relative">
                                    <img
                                        src={Kartik}
                                        alt="Kartik Kamatagi"
                                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-4 md:right-4 glass-card px-6 py-4 rounded-xl flex items-center gap-3 border-primary/30"
                        >
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">Full Stack</span>
                                <span className="text-sm text-primary uppercase tracking-wider font-semibold">Developer</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 lg:col-span-7 space-y-6 text-lg text-dark-muted"
                    >
                        <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
                            {/* Decorative quote icon */}
                            <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">"</div>

                            <p className="relative z-10 leading-relaxed mb-6 text-gray-300 font-light">
                                I am a passionate Full Stack Developer with experience in <span className="text-primary font-medium">Java</span>, <span className="text-green-400 font-medium">Spring Boot</span>, <span className="text-cyan-400 font-medium">React.js</span>, <span className="text-yellow-500 font-medium">Python</span>, and <span className="text-emerald-500 font-medium">Django</span>.
                            </p>

                            <p className="relative z-10 leading-relaxed mb-6 text-gray-300 font-light">
                                I enjoy building scalable web applications and creating responsive user interfaces. I specialize in designing robust backend systems and connecting them to seamless modern frontends.
                            </p>

                            <p className="relative z-10 leading-relaxed text-gray-300 font-light">
                                I have worked on comprehensive projects such as an <span className="text-white font-medium">Online Movie Ticket Booking System</span>, a <span className="text-white font-medium">Food Delivery Web App</span>, and an <span className="text-white font-medium">Adventure Tourism Website</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
