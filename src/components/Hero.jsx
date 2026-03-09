import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiDownload, HiArrowRight } from 'react-icons/hi';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
            {/* Background Animated Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-primary font-medium tracking-wide uppercase text-sm md:text-base">
                        Welcome to my portfolio
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight text-white mb-4">
                        Hi, I'm <span className="text-gradient">Kartik Kamatagi</span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-semibold text-dark-muted mb-6">
                        Full Stack Developer
                    </h2>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 text-sm md:text-base text-dark-text/80 font-medium">
                        <span className="glass px-4 py-2 rounded-full border-primary/30 text-primary">Java</span>
                        <span className="glass px-4 py-2 rounded-full border-green-500/30 text-green-400">Spring Boot</span>
                        <span className="glass px-4 py-2 rounded-full border-cyan-500/30 text-cyan-400">React.js</span>
                        <span className="glass px-4 py-2 rounded-full border-yellow-500/30 text-yellow-500">Python</span>
                        <span className="glass px-4 py-2 rounded-full border-emerald-500/30 text-emerald-500">Django</span>
                    </div>

                    <p className="max-w-2xl text-lg text-dark-muted mb-10 leading-relaxed mx-auto lg:mx-0">
                        I build scalable web applications and create responsive user interfaces with a focus on delivering high-quality digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group"
                        >
                            View Projects
                            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="#"
                            className="cursor-pointer glass hover:bg-dark-card text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2"
                        >
                            <HiDownload className="text-xl" />
                            Download Resume
                        </a>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer border border-dark-border hover:border-primary/50 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-sm text-dark-muted mb-2 uppercase tracking-widest text-[10px]">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-dark-muted rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
